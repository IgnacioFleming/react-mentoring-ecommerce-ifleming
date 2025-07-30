import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ErrorSection } from './ErrorSection';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('ProductListError', () => {
  const mockTitle = 'some title';
  const mockMessage = 'some mock message';

  it('renders header and description', () => {
    const { container, getByRole, getByText, queryByRole } = render(
      <MemoryRouter>
        <ErrorSection title={mockTitle} message={mockMessage} />,
      </MemoryRouter>,
    );
    expect(getByRole('heading', { name: mockTitle })).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(getByText(mockMessage)).toBeInTheDocument();
    expect(queryByRole('button', { name: 'Go Back' })).not.toBeInTheDocument();
  });

  it('renders Go Back button if its prop is true and navigates to previous page if user clicks it', () => {
    const { queryByRole, getByText } = render(
      <MemoryRouter initialEntries={['/page-1', '/page-2']} initialIndex={1}>
        <Routes>
          <Route path="/page-1" element={<div>Page 1</div>} />
          <Route
            path="/page-2"
            element={<ErrorSection title={mockTitle} message={mockMessage} goBackBtn />}
          />
        </Routes>
      </MemoryRouter>,
    );

    const goBackBtn = queryByRole('button', { name: 'Go Back' })!;

    expect(goBackBtn).toBeInTheDocument();
    fireEvent.click(goBackBtn);
    expect(getByText('Page 1')).toBeInTheDocument();
  });
});

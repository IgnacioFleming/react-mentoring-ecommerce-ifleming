import { describe, expect, it } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

const ModalMock = () => (
  <Modal>
    <Modal.Trigger>
      <button>Open Modal</button>
    </Modal.Trigger>
    <Modal.Content>
      <Modal.Title>Modal title</Modal.Title>
      <div>Modal content</div>
    </Modal.Content>
  </Modal>
);

describe('Modal', () => {
  it('renders with correct overlay', () => {
    const { getByRole, getByTestId } = render(<ModalMock />);
    fireEvent.click(getByRole('button', { name: 'Open Modal' }));
    expect(getByTestId('modal-overlay')).toBeInTheDocument();
  });

  it('renders with correct content, title and close button', () => {
    const { getByRole, getByTestId } = render(<ModalMock />);
    fireEvent.click(getByRole('button', { name: 'Open Modal' }));
    expect(getByTestId('modal-content')).toBeInTheDocument();
    expect(getByTestId('modal-title')).toBeInTheDocument();
    expect(getByTestId('modal-close')).toBeInTheDocument();
  });
});

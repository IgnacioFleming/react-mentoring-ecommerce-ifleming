import { describe, expect, it } from 'vitest';
import { Accordion } from './Accordion';
import { fireEvent, render } from '@testing-library/react';

const AccordionMock = () => (
  <Accordion type="single" collapsible>
    <Accordion.Item value="item-1">
      <Accordion.Trigger>
        <button>Trigger</button>
      </Accordion.Trigger>
      <Accordion.Content>
        <div>Content</div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

describe('Accordion', () => {
  it('should render the accordion correctly', () => {
    const { getByTestId } = render(<AccordionMock />);
    expect(getByTestId('accordion-item')).toBeInTheDocument();
  });

  it('should render content when clicking on trigger', () => {
    const { getByRole, getByText } = render(<AccordionMock />);
    const trigger = getByRole('button', { name: 'Trigger' });
    expect(trigger).toBeInTheDocument();
    fireEvent.click(trigger);
    const content = getByText('Content');
    expect(content).toBeInTheDocument();
  });

  it('should hide content when clicking on trigger 2 times', async () => {
    const { getByRole, getByText, queryByText } = render(<AccordionMock />);
    const trigger = getByRole('button', { name: 'Trigger' });

    fireEvent.click(trigger);
    const content = getByText('Content');
    expect(content).toBeInTheDocument();

    fireEvent.click(trigger);

    expect(queryByText('Content')).not.toBeInTheDocument();
  });
});

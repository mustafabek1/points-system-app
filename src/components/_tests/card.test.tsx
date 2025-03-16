import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '../Card';
import '@testing-library/jest-dom/extend-expect';

describe('Cart', () => {
  const userId = '123';

  it('renders Cart component', async () => {
    render(<Cart userId={userId} />);
    expect(screen.getByText('Cart')).toBeInTheDocument();
    expect(screen.getByText('Available Points:')).toBeInTheDocument();
  });

  it('toggles input visibility when Use Points button is clicked', async () => {
    render(<Cart userId={userId} />);
    const usePointsButton = screen.getByText('Use Points');
    fireEvent.click(usePointsButton);
    expect(screen.getByPlaceholderText('Enter points to use')).toBeInTheDocument();
  });

  it('displays error message for invalid points amount', async () => {
    render(<Cart userId={userId} />);
    const usePointsButton = screen.getByText('Use Points');
    fireEvent.click(usePointsButton);
    const input = screen.getByPlaceholderText('Enter points to use');
    fireEvent.change(input, { target: { value: '1000' } });
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(screen.getByText('Invalid points amount')).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders a counter', () => {
  render(<Counter />);
  const buttonElement = screen.getAllByRole('button')[0]
  expect(buttonElement).toBeInTheDocument();
});


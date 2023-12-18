import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});

test('matches snapshot for App component', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test('toggles between Box Maker and Todo App', () => {
  const { getByText } = render(<App />);

  // Check initial content
  expect(getByText('Switch to Todo App')).toBeTruthy();
  expect(getByText('Add a new box')).toBeTruthy();

  // Click the button to switch to TodoList
  fireEvent.click(getByText('Switch to Todo App'));

  // Check if the button and TodoList component are rendered
  expect(getByText('Switch to Box Maker')).toBeTruthy();
  expect(getByText('Enter a new todo')).toBeTruthy();
});

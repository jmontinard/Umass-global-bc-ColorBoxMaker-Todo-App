import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('allows the user to add a new todo', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);

  // Enter a new todo
  fireEvent.change(getByPlaceholderText('Enter a new todo'), {
    target: { value: 'Test todo' },
  });
  fireEvent.click(getByText('Add Todo'));

  // Check if the new todo is displayed
  expect(getByText('Test todo')).toBeTruthy();
});

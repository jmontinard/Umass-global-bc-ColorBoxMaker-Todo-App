import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm without crashing', () => {
  const { getByPlaceholderText } = render(<NewTodoForm addTodo={() => {}} />);
  const inputElement = getByPlaceholderText('Enter a new todo');
  expect(inputElement).toBeInTheDocument();
});

test('matches snapshot for NewTodoForm', () => {
  const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

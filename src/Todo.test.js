import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('allows the user to delete a todo', () => {
  const removeTodo = jest.fn();
  const { getByText } = render(
    <Todo id="1" task="Test todo" removeTodo={removeTodo} />
  );

  // Click the delete button
  fireEvent.click(getByText('X'));

  // Check if removeTodo has been called
  expect(removeTodo).toBeCalledWith('1');
});

import React, { useState, useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = window.localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, completed: false, deleted: false }]);
  };

  const removeTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, deleted: true } : todo))
    );
  };

  const updateTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos
        .filter((todo) => !todo.deleted)
        .map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            toggleTodo={toggleTodo}
            completed={todo.completed}
          />
        ))}
    </div>
  );
}

export default TodoList;

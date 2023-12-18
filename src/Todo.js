import React, { useState } from 'react';

function Todo({ id, task, removeTodo, updateTodo, toggleTodo, completed }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, newTask);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item \${isDeleted ? 'deleted' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <>
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task}
          </span>
          <button onClick={() => removeTodo(id)}>X</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => toggleTodo(id)}>
            {completed ? 'Mark as not completed' : 'Mark as completed'}
          </button>
        </>
      )}
    </div>
  );
}

export default Todo;

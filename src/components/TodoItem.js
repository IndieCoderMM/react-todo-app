import React from 'react';

function TodoItem({ todo, handleChange, deleteTodo }) {
  return (
    <li>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => {
          handleChange(todo.id);
        }}
      />
      {todo.title}
      <button
        type='button'
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;

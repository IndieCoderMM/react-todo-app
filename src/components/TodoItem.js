import React from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ todo, handleChange, deleteTodo }) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <input
        className={styles.checkbox}
        type='checkbox'
        checked={todo.completed}
        onChange={() => {
          handleChange(todo.id);
        }}
      />
      <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
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

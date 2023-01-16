import React, { useState } from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ todo, handleChange, deleteTodo, updateTodo }) {
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};
  if (editing) viewMode.display = 'none';
  else editMode.display = 'none';

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
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
      </div>
      <input
        className={styles.textInput}
        type='text'
        style={editMode}
        value={todo.title}
        onChange={(e) => {
          updateTodo(e.target.value, todo.id);
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
}

export default TodoItem;

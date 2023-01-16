import React, { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';
import { BsFillTrashFill } from 'react-icons/bs';

const TodoItem = ({ todo, handleChange, deleteTodo, updateTodo }) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    return () => console.log('cleaning up');
  }, []);

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
  const { id, completed, title } = todo;
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type='checkbox'
          checked={completed}
          onChange={() => {
            handleChange(id);
          }}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        <button
          type='button'
          onClick={() => {
            deleteTodo(id);
          }}
        >
          <BsFillTrashFill style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
      </div>
      <input
        className={styles.textInput}
        type='text'
        style={editMode}
        value={todo.title}
        onChange={(e) => {
          updateTodo(e.target.value, id);
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

export default TodoItem;

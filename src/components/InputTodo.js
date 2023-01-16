import React, { useState } from 'react';

function InputTodo({ addTodo }) {
  const [title, setTitle] = useState('');
  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert('Please enter a title');
      return;
    }
    addTodo(title.trim());
    setTitle('');
  };
  return (
    <form onSubmit={onSubmit} className='form-container'>
      <input
        className='task-input'
        type='text'
        placeholder='Add new todo'
        onChange={onChange}
        value={title}
      />
      <button className='add-btn'>Add</button>
    </form>
  );
}

export default InputTodo;

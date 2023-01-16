import React, { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

function InputTodo({ addTodo }) {
  const [title, setTitle] = useState('');
  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      return;
    }
    addTodo(title.trim());
    setTitle('');
  };
  return (
    <form onSubmit={onSubmit} className="form-container">
      <input
        className="task-input"
        type="text"
        placeholder="Add new todo"
        onChange={onChange}
        value={title}
      />
      <button className="add-btn" type="button">
        <AiFillPlusCircle />
      </button>
    </form>
  );
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default InputTodo;

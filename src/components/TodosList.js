import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todos, handleChange, deleteTodo, updateTodo,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChange={handleChange}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  // eslint-disable-next-line
  todos: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodosList;

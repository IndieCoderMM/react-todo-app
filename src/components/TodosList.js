import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({ todos, handleChange, deleteTodo, updateTodo }) => {
  return (
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
};

export default TodosList;

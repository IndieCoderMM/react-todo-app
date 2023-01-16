import React from 'react';
import TodoItem from './TodoItem';

function TodosList({ todos, handleChange, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChange={handleChange}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodosList;

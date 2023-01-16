import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

function TodoContainer() {
  const [todos, setTodos] = useState([]);

  const handleChange = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => [...prevTodos.filter((todo) => todo.id !== id)]);
  };

  return (
    <div>
      <Header />
      <InputTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleChange={handleChange}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoContainer;
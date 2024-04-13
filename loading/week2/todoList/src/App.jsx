import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo }]);
  };

  const moveTodoToDone = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setDoneTodos([...doneTodos, todo]);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const deleteDoneTodo = (id) => {
    setDoneTodos(doneTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>UMC Study Plan</h1>
      <div className="divider title"></div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        doneTodos={doneTodos}
        moveTodoToDone={moveTodoToDone}
        deleteDoneTodo={deleteDoneTodo}
      />
    </div>
  );
}

export default App;



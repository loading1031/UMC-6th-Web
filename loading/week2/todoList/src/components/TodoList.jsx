import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, doneTodos, moveTodoToDone, deleteDoneTodo }) {
  return (
    <div className="todo-list-container">
      <div className="todo-title-field">
        <h4>해야할 일</h4>
        <div className="todo-list-field">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onComplete={() => moveTodoToDone(todo.id)} />
          ))}
        </div>
      </div>
      <div className="done-title-field">
        <h4>해낸 일</h4>
        <div className="todo-list-field">
          {doneTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDelete={() => deleteDoneTodo(todo.id)} isDone />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;


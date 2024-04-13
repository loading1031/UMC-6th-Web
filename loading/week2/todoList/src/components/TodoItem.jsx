import React from 'react';

function TodoItem({ todo, onComplete, onDelete, isDone }) {
  return (
    <div className='todo-item'>
      <div className="todo-content">
        <div className="todo-text">{todo.text}</div>
        {isDone ? (
          <button onClick={onDelete}>삭제</button>
        ) : (
          <button onClick={onComplete}>완료</button>
        )}
      </div>
      <div className="divider todo"></div>
    </div>
  );
}

export default TodoItem;


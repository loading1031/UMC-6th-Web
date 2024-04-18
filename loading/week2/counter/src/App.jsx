import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    console.log("increase 버튼이 클릭됨");
    setCount(count => count + 1);
  };

  const handleDecrease = () => {
    console.log("decrease 버튼이 클릭됨");
    setCount(count => count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default Counter;



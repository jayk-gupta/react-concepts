import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevValue) => prevValue + 1);

  };
  // console.log(count);
  const decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };
  return (
    <div className="flex gap-2 p-12 text-3xl">
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;

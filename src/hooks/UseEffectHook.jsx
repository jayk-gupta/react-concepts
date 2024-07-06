import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  function addCount() {
    setCount((count) => count + 1);
  }
  function subtractCount() {
    setCount((count) => count - 1);
  }
  // Every time your component renders, React will update the screen and then run the code inside useEffect.

  useEffect(() => {}); //Runs after every re-render, if dependency array is absent
  useEffect(() => {}, []); //Only on mount
  // useEffect(() => {}, [value]); //Only on mount -> when value changes
  useEffect(() => {
    document.title = `Count is: ${count}`;
  });

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
    </div>
  );
}

export default UseEffectHook;

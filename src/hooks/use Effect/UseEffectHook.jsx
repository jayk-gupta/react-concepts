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
  useEffect(() => {
    console.log("only on mount");
  }, []);

  useEffect(() => {
    console.log("After every render");
  }); //Runs after every re-render, if dependency array is absent

  useEffect(() => {
    console.log("after count changes");
  }, [count]); //Only on mount

  // useEffect(() => {}, [value]); //Only on mount -> when value changes
  useEffect(() => {
    document.title = `Count is: ${count}`;
  });

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={addCount}>Add</button>
      <p></p>
      <button onClick={subtractCount}>Subtract</button>
    </div>
  );
}

export default UseEffectHook;

/*
If multiple useeffect is there, it wil execute in the order in which we call it

*/ 
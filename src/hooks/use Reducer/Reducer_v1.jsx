import React, { useState } from "react";
import "./Reducer.css";
//hello
function Reducer() {
  // usestate
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  //   date object
  const date = new Date("July 7 2024");
  date.setDate(date.getDate() + count);
  // handlers
  const dec = () => {
    setCount((count) => count - step);
  };
  const inc = () => {
    setCount((count) => count + step);
  };
  const defineCount = function (e) {
    setCount(Number(e.target.value));
  };
  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };
  const reset = function () {
    setCount(0);
    setStep(1);
  };
  return (
    <div className="counter">
      <div className="input">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <p className="step">{step}</p>
      </div>
      <div className="btns">
        <button onClick={dec}>-</button>
        <div>
          <input value={count} onChange={defineCount} />
        </div>
        <button onClick={inc}>+</button>
      </div>
      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}></button>
      </div>
    </div>
  );
}

export default Reducer;

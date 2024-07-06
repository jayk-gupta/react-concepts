import React, { act, useReducer, useState } from "react";
import "./Reducer.css";
  const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  //  current state , action
  //              0 , 1
  console.log(state, action);
  // if (action.type == "inc") {
  //   return state + 1;
  // }
  // if (action.type == "dec") {
  //   return state - 1;
  // }
  // if (action.type === "setCount") {
  //   return action.payload;
  // }
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("unkown action");
  }
}

function Reducer() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  //   date object
  const date = new Date("July 7 2024");
  date.setDate(date.getDate() + count);

  // handlers
  const dec = () => {
    dispatch({ type: "dec" });
  };
  const inc = () => {
    dispatch({ type: "inc" });
  };

  // definition handlers
  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };
  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };
  // Reset
  const reset = function () {
    dispatch({ type: "reset" });
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
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Reducer;

import React, { useState } from "react";
const colors = [
  {
    id: 0,
    color: "red",
  },
  {
    id: 1,
    color: "yellow",
  },
  {
    id: 2,
    color: "green",
  },
];
function Button() {
  const [color, setColor] = useState("red");
  const handleClick = () => {
    setColor();
  };

  return (
    <div style={{ background: "#f0f0f0" }}>
      <button onClick={handleClick} style={{ color: color }}>
        Click me
      </button>
    </div>
  );
}

export default Button;

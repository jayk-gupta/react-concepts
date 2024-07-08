import React, { useEffect } from "react";

function Effect() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("hi");
    }, 1000);
  });

  return <div>Effect</div>;
}

export default Effect;

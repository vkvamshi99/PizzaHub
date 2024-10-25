import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleclickinc() {
    setCount(count + 1);
  }
  function handleclickdec() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleclickinc}>+</button>
      <button onClick={handleclickdec}>-</button>
    </div>
  );
}

export default Counter;

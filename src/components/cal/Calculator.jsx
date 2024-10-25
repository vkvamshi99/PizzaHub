import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [input, setInput] = useState();
  const [result, setResult] = useState();

  function handleResult() {
    setResult(eval(input));
    setInput(" ");
  }
  return (
    <div>
      Calculator
      <br />
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => handleResult(input)}>result</button>
      <br />
      {result && `your result is ${result}`}
      <div>
        <button onClick={() => setInput(input + "1")}>1</button>
        <button onClick={() => setInput(input + "2")}>2</button>
        <button onClick={() => setInput(input + "3")}>3</button>
        <button onClick={() => setInput(input + "4")}>4</button>
        <button onClick={() => setInput(input + "5")}>5</button>
        <button onClick={() => setInput(input + "6")}>6</button>
        <button onClick={() => setInput(input + "7")}>7</button>
        <button onClick={() => setInput(input + "8")}>8</button>
        <button onClick={() => setInput(input + "9")}>9</button>
        <button onClick={() => setInput(input + "0")}>0</button>
        <button onClick={() => setInput(input + "*")}>*</button>
        <button onClick={() => setInput(input + "/")}>/</button>
        <button onClick={() => setInput(input + "-")}>-</button>
        <button onClick={() => setInput(input + "+")}>+</button>
        <button
          onClick={() => {
            setInput(""), setResult("");
          }}
        >
          clear
        </button>
      </div>
    </div>
  );
}

export default Calculator;

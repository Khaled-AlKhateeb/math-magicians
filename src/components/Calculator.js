import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [count, setCount] = useState(0);

  useState = () => {
    const obj = calculate(count, setCount);
    setCount(obj);
  };

  const { total, next, operation } = setCount;
  return (
    <div className="calc-container">
      <div className="result-container">
        <div className="result">
          <span>
            {total}
            {operation}
            {next}
          </span>
        </div>
      </div>
      <div className="keys-container">
        <button onClick={setCount} type="button" className="calc-keys">AC</button>
        <button onClick={setCount} type="button" className="calc-keys">+/-</button>
        <button onClick={setCount} type="button" className="calc-keys">%</button>
        <button onClick={setCount} type="button" className="calc-keys arithmetic">&#247;</button>
        <button onClick={setCount} type="button" className="calc-keys">7</button>
        <button onClick={setCount} type="button" className="calc-keys">8</button>
        <button onClick={setCount} type="button" className="calc-keys">9</button>
        <button onClick={setCount} type="button" className="calc-keys arithmetic">x</button>
        <button onClick={setCount} type="button" className="calc-keys">4</button>
        <button onClick={setCount} type="button" className="calc-keys">5</button>
        <button onClick={setCount} type="button" className="calc-keys">6</button>
        <button onClick={setCount} type="button" className="calc-keys arithmetic">-</button>
        <button onClick={setCount} type="button" className="calc-keys">1</button>
        <button onClick={setCount} type="button" className="calc-keys">2</button>
        <button onClick={setCount} type="button" className="calc-keys">3</button>
        <button onClick={setCount} type="button" className="calc-keys arithmetic">+</button>
        <button onClick={setCount} type="button" className="calc-keys zero-key">0</button>
        <button onClick={setCount} type="button" className="calc-keys">.</button>
        <button onClick={setCount} type="button" className="calc-keys arithmetic">=</button>
      </div>
    </div>
  );
};

export default Calculator;

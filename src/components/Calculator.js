import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="result-container">
          <p className="result">0</p>
        </div>
        <div className="keys-container">
          <button type="button" className="calc-keys">AC</button>
          <button type="button" className="calc-keys">&plusmn;</button>
          <button type="button" className="calc-keys">%</button>
          <button type="button" className="calc-keys arithmetic">&#247;</button>
          <button type="button" className="calc-keys">7</button>
          <button type="button" className="calc-keys">8</button>
          <button type="button" className="calc-keys">9</button>
          <button type="button" className="calc-keys arithmetic">x</button>
          <button type="button" className="calc-keys">4</button>
          <button type="button" className="calc-keys">5</button>
          <button type="button" className="calc-keys">6</button>
          <button type="button" className="calc-keys arithmetic">-</button>
          <button type="button" className="calc-keys">1</button>
          <button type="button" className="calc-keys">2</button>
          <button type="button" className="calc-keys">3</button>
          <button type="button" className="calc-keys arithmetic">+</button>
          <button type="button" className="calc-keys zero-key">0</button>
          <button type="button" className="calc-keys">.</button>
          <button type="button" className="calc-keys arithmetic">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;

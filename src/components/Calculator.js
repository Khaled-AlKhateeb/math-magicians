import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: this.next,
      operation: this.operation,
    };
  }

  getValue = (e) => {
    const value = e.target.innerHTML;
    const obj = calculate(this.state, value);
    this.setState(obj);
  }

  render() {
    const { total, next, operation } = this.state;
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
          <button onClick={this.getValue} type="button" className="calc-keys">AC</button>
          <button onClick={this.getValue} type="button" className="calc-keys">&plusmn;</button>
          <button onClick={this.getValue} type="button" className="calc-keys">%</button>
          <button onClick={this.getValue} type="button" className="calc-keys arithmetic">&#247;</button>
          <button onClick={this.getValue} type="button" className="calc-keys">7</button>
          <button onClick={this.getValue} type="button" className="calc-keys">8</button>
          <button onClick={this.getValue} type="button" className="calc-keys">9</button>
          <button onClick={this.getValue} type="button" className="calc-keys arithmetic">x</button>
          <button onClick={this.getValue} type="button" className="calc-keys">4</button>
          <button onClick={this.getValue} type="button" className="calc-keys">5</button>
          <button onClick={this.getValue} type="button" className="calc-keys">6</button>
          <button onClick={this.getValue} type="button" className="calc-keys arithmetic">-</button>
          <button onClick={this.getValue} type="button" className="calc-keys">1</button>
          <button onClick={this.getValue} type="button" className="calc-keys">2</button>
          <button onClick={this.getValue} type="button" className="calc-keys">3</button>
          <button onClick={this.getValue} type="button" className="calc-keys arithmetic">+</button>
          <button onClick={this.getValue} type="button" className="calc-keys zero-key">0</button>
          <button onClick={this.getValue} type="button" className="calc-keys">.</button>
          <button onClick={this.getValue} type="button" className="calc-keys arithmetic">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;

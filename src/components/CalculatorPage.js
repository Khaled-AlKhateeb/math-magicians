import React from 'react';
import Calculator from './Calculator';
import Navbar from './Navbar';

class CalculatorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="show-calculator">
        <Navbar />
        <Calculator />
      </div>
    );
  }
}

export default CalculatorPage;

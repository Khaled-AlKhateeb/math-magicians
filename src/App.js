import React from 'react';
import './App.css';
import CalculatorPage from './components/CalculatorPage';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Home />
        <CalculatorPage />
      </div>
    );
  }
}

export default App;

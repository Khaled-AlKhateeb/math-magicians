import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-container">
        <h1 className="navbar-title">Math Magicians</h1>
        <div className="navbar-btn-container">
          <Link to="./Home.js">Home</Link>
          <button className="navbar-btn" type="button">Home</button>
          <button className="navbar-btn" type="button">Calculator</button>
          <button className="navbar-btn" type="button">Quote</button>
        </div>
      </div>
    );
  }
}

export default Navbar;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<CalculatorPage />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </div>
);

const Home = () => (
  <div className="show-home">
    <div className="navbar-container">
      <h1 className="navbar-title">Math Magicians</h1>
      <nav className="navbar-btn-container">
        <Link className="navbar-btn" to="/calculator">Calculator</Link>
        <Link className="navbar-btn" to="/quote">Quote</Link>
      </nav>
    </div>
    <div className="home-container">
      <h2 className="home-title">Welcome to our page!</h2>
      <p className="home-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis molestiae voluptatem
        eligendi, provident tempore voluptate itaque quos odio, laudantium sunt inventore
        excepturi, perferendis optio. Tenetur commodi exercitationem saepe labore. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Aliquid praesentium, necessitatibus
        quibusdam pariatur mollitia quo ex adipisci voluptatum alias eligendi.
      </p>
      <p className="home-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est autem aperiam
        debitis ipsum voluptates quasi molestiae numquam, eveniet, minus maxime esse harum vero
        placeat sunt sint ea eaque itaque. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Enim minima aspernatur recusandae ipsa? Nostrum perspiciatis amet maiores
        laboriosam tenetur. Perferendis cumque itaque error nesciunt corporis quos iusto
        corrupti quisquam neque optio aspernatur aliquid ipsam, magni odit ut sit maxime iure.
      </p>
    </div>
    <Footer />
  </div>
);

const CalculatorPage = () => (
  <div className="show-calculator">
    <div className="navbar-container">
      <h1 className="navbar-title">Math Magicians</h1>
      <nav className="navbar-btn-container">
        <Link className="navbar-btn" to="/">Home</Link>
        <Link className="navbar-btn" to="/quote">Quote</Link>
      </nav>
    </div>
    <div className="calculator-container">
      <h2 className="calculator-title">Let&apos;s do some math!</h2>
      <Calculator />
    </div>
    <Footer />
  </div>
);

const Quote = () => (
  <div className="show-quote">
    <div className="navbar-container">
      <h1 className="navbar-title">Math Magicians</h1>
      <nav className="navbar-btn-container">
        <Link className="navbar-btn" to="/">Home</Link>
        <Link className="navbar-btn" to="/calculator">Calculator</Link>
      </nav>
    </div>
    <div className="quote">
      <h2>
        Mathematics is not about numbers, equations, computations, or algorithms:
        it is about understanding. -William Paul Thurston
      </h2>
    </div>
    <Footer />
  </div>
);

export default App;

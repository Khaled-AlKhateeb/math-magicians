import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="show-home">
        <Navbar />
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
  }
}

export default Home;

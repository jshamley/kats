import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <img src={"/assets/Garfield.png"} alt="Garfield" className="intro-img" />
        <div className="intro-text">
          <p>We’re excited you’re here to celebrate our friend the Kat!</p>
          <p>Our vision is to be the home for all of your Kat resources for fans, owners, and those that are curious…like Kats.</p>
        </div>
      </div>
    );
  }
}

export default Home;

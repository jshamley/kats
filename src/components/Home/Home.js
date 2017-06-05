import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <img src={"/assets/Garfield.png"} alt="Garfield" className="intro-img" />
        <div className="intro-text">
          <p>We’re excited you’re here to celebrate our friend the Kat!</p>
          <p>Our vision is to be home for all Kat resources for fans, owners, and those that are curious…like Katz.</p>
        </div>
      </div>
    );
  }
}

export default Home;

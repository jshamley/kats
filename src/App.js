import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>KATS</h1>
          <h3>Everything you need for your Kat book report in one place.</h3>
        </div>
        <div className="site-content">
          <img src={"/assets/Garfield.png"} alt="Garfield" className="intro-img" />
          <div className="intro-text">
            {/*<p>Here you can find Kat information, facts, pictures, and more!</p>*/}
            {/*<p>We’re excited you’re here to celebrate our friend the Kat!</p>*/}
            {/*<p>Our vision is to be the home for all of your Kat resources for fans, owners, and those that are curious…like Kats.</p>*/}

            
          </div>
        </div>
        <div className="site-footer">
          <h4>Come back later today for updates!</h4>
        </div>        
      </div>
    );
  }
}

export default App;

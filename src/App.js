import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>We Love KATs</h2>
        </div>
        <div className="site-content">
          <img src={"/assets/Garfield.png"} alt="Garfield" className="intro-img" />
          <div className="intro-text">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur, dignissimos pariatur mollitia aliquid maiores sit dolores dolore magnam nostrum adipisci cum quis enim animi obcaecati. Quae iusto, fugiat cumque.</div>
            <div>Veniam quos assumenda eligendi atque quo molestias, consequatur nihil cum ea sequi delectus ab obcaecati fugit expedita quas, aliquid deleniti nulla ducimus neque quasi facilis numquam excepturi. Sit, assumenda, repudiandae.</div>
            <div>Voluptatibus sunt explicabo possimus recusandae quasi velit dolorem culpa quibusdam, ipsum labore ab molestias nihil suscipit nisi incidunt, unde iusto laborum laboriosam, tempore fugit minus. Itaque vero doloremque, asperiores tenetur?</div>
            <div>Ex aperiam accusamus vitae blanditiis nesciunt a tempore perspiciatis, amet mollitia, quia, eius possimus voluptatem numquam tempora reprehenderit saepe labore autem delectus explicabo! Aspernatur nobis, molestiae rem debitis impedit nisi.</div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;

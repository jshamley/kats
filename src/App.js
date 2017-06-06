import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Pop from './components/Pop/Pop';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.navigationChange = this.navigationChange.bind(this);
    this.state = {
      currentPage: 'home'
    }
  }

  navigationChange (page) {
    console.log(page);
    if (this.state.currentPage === page) return;

    this.setState({ currentPage: page });
  }

  render() {
    return (
      
      <div className="App">
        <div className="App-header">
          <link href="https://fonts.googleapis.com/css?family=Butterfly+Kids" rel="stylesheet"/>
          <h1>KATZ</h1>
          <h3>Everything you need for your Kat book report in one place.</h3>
        </div>
        <div className="site-content">
          <Navigation callback={this.navigationChange} />
          <div className="content">
            {this.state.currentPage === 'home' && 
              <Home />
            }
            {this.state.currentPage === 'pop' && 
              <Pop />
            }
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

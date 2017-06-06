import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Anatomy from './components/Anatomy/Anatomy';
import Contact from './components/Contact/Contact';
import Pop from './components/Pop/Pop';
import RedPanda from './RedPanda/RedPanda';
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
    if (this.state.currentPage === page) return;

    this.setState({ currentPage: page });
  }

  render() {
    return (        
      <div className="App">
        <Navigation callback={this.navigationChange} />
        <div className="content-wrapper">
          <div className="App-header">
            <h1>KATZ</h1>
            <h3>Everything you need for your Kat book report in one place.</h3>
          </div>
          <div className="site-content">
            {this.state.currentPage === 'home' && 
              <Home />
            }
            {this.state.currentPage === 'pop' && 
              <Pop />
            }
            {this.state.currentPage === 'contact' && 
              <Contact />
            }
            {this.state.currentPage === 'anatomy' && 
              <Anatomy />
            }
            {this.state.currentPage === 'panda' &&
              <RedPanda />
            }
          </div>
        </div>
        <div className="site-footer">
          <h4><span onClick={() => this.navigationChange('contact')} className="link">Contact Us</span> if you don’t see what you need for your book report!</h4>
        </div>        
      </div>
    );
  }
}

export default App;

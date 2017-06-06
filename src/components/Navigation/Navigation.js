import React, { Component } from 'react';
import './nav.css';
import PropTypes from 'prop-types';

class Navigation extends Component {
  render() {
    const { callback } = this.props;

    return (
      <div className="nav">
        <ul>
          <li onClick={() => callback('home')}>HOME</li>
          <li onClick={() => callback('contact')}>CONTACT US</li>
          <li onClick={() => callback('pop')}>IN THE WILD</li>
          <li onClick={() => callback('anatomy')}>ANATOMY &amp; BIOLOGY</li>
        </ul>
      </div>
    );
  }
}

Navigation.PropTypes = {
  callback: PropTypes.func
};

export default Navigation;

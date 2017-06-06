import React, {Component} from 'react';

class NavBar extends Component {
  capitalizeAndSpace(string) {
    return string
      .split('')
      .map((char, i) => {
        console.log('char', char);
        if (i == 0) {
          return char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
          return ' ' + char;
        } else {
          return char;
        }
      })
      .join('');
  }
  render() {
    const {pages} = this.props;
    return (
      <div
        style={{
          backgroundColor: '#333',
          width: '100%',
          position: 'fixed',
          top: '0px',
          textAlign: 'center;',
          zIndex: '9999'
        }}>
        {Object.keys(pages).map(page => {
          return (
            <div
              style={{
                display: 'inline-block',
                padding: '5px 20px',
                margin: '5px',
                fontWeight: 'bold',
                backgroundColor: pages[page].color,
                borderRadius: '5px'
              }}>
              <a style={{color: 'white'}} href={`#${pages[page].tag}`}>
                {this.capitalizeAndSpace(pages[page].tag)}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NavBar;

import React, {Component} from 'react';

class InterestingFacts extends Component {
  render() {
    const {tag} = this.props;

    return (
      <div
        style={{
          height: '400px',
          backgroundColor: 'orange',
          textAlign: 'center',
          paddingTop: '60px'
        }}
        id={tag}
      />
    );
  }
}

export default InterestingFacts;

import React, {Component} from 'react';

class BehaviorAndBiology extends Component {
  render() {
    const {tag, color} = this.props;

    return (
      <div
        style={{
          backgroundColor: color,
          textAlign: 'center',
          paddingTop: '60px',
          paddingBottom: '20px',
          color: 'white'
        }}
        id={tag}>
        <h2>Behavior and Biology</h2>
        <h4>Height: </h4><p />
        <h4>Weight: </h4><p>Male: 8.2 – 14 lbs, Female: 6.6 – 13 lbs</p>
        <h4>Size: </h4><p>20 to 26 in; tail, 12 to 20 in</p>
        <h4>Unique Characterisitics: </h4><p> Herbivorous carnivoran and Red pandas tweet</p>
        <h4>How Red Pandas Breath: </h4><p>Breath with lungs</p>
        <h4>Lifespan: </h4><p>12-14 years</p>
      </div>
    );
  }
}

export default BehaviorAndBiology;

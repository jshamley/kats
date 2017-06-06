import React, {Component} from 'react';

class Home extends Component {
  render() {
    const {tag, color} = this.props;

    return (
      <div
        id={tag}
        style={{
          backgroundColor: color,
          textAlign: 'center',
          paddingTop: '60px',
          paddingBottom: '20px',
          color: 'white'
        }}>
        <h1>
          Red Panda Home Page

        </h1>
        <img
          style={{height: 'auto', width: '250px'}}
          src={'https://upload.wikimedia.org/wikipedia/en/b/be/Red_Panda_in_a_Gingko_tree.jpg'}
        />
        <h4>Scientific Name</h4><p>(Ailurus fulgen)</p>
        <h4>Subspecies</h4>
        <p>Western red panda A. f. fulgens</p>
        <p>Styan's red panda A. f. styani </p>
        <h4>Classification Details</h4>
        <p>
          Red pandas are the only living member of the family Ailurida
        </p>
        <p>
          Their taxonomic position has been a subject of much scientific debate.{' '}
        </p>
        <p>
          {' '}
          Research shows they are probably most closely related to the group{' '}
        </p>
        <p>
          that includes weasels, raccoons and skunks.
        </p>
      </div>
    );
  }
}

export default Home;

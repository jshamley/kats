import React from 'react';

const StyleGuide = React.createClass({
  render() {
    const {tag} = this.props;
    return (
      <div className="guide">
        <a name={tag}>

          <section>
            <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Red_Panda_in_a_Gingko_tree.jpg" />
          </section>
        </a>

      </div>
    );
  }
});

export default StyleGuide;

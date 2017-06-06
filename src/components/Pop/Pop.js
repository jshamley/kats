import React, { Component } from 'react';

class Pop extends Component {
  render() {
    return (
      <div>
        <h2 className="page-title">Pop Culture References</h2>
        <div className="text-left">
          <p>
            Katz appear throughout pop culture. They show up in all forms of media including movies, books, documentaries and articles. They are often misrepresented as being excellent mice hunters, but many have observed that they are far too lazy or care about mice. 
          </p>
          <h4>Movies</h4>
          <p>
            <a href="http://www.imdb.com/title/tt0356634/" rel="noopener noreferrer" target="_blank">Garfield 2004</a>
          </p>
          <h4>Books</h4>
          <p>
            <a href="https://www.amazon.com/Cat-Hat-Book-CD/dp/0375834923" rel="noopener noreferrer" target="_blank">Cat in the Hat</a>
          </p>
          <h4>Documentaries</h4>
          <p>
            <a href="https://www.youtube.com/watch?v=CEUW0B2ijCQ" rel="noopener noreferrer" target="_blank">Egyptian Cats</a>
          </p>
          <h4>Articles</h4>
          <p>
            <a href="http://pets.thenest.com/allergy-hairless-cat-9980.html" rel="noopener noreferrer" target="_blank">Hairless Cats and Allergies</a>
          </p>
          <h4>Misrepresentation</h4>
          <p>Cats do not poop rainbows</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default Pop;

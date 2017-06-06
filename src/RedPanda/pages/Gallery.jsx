import './_gallery.less';
import React, {Component} from 'react';
import Tiles from './Tiles';

class Gallery extends Component {
  render() {
    const {tag, color} = this.props;
    const data = [
      {
        id: 1,
        name: 'Cubs',
        image: 'http://blog.nus.edu.sg/lsm1303student2013/files/2013/04/20090613-Red-Pandas-Fighting-1dq9tui.jpg',
        caption: 'This is a caption'
      },
      {
        id: 2,
        name: 'Winky Face',
        image: 'http://justcuteanimals.com/wp-content/uploads/2016/07/red-panda-cubs-cute-animal-pictures-pics.jpg',
        caption: 'This is a caption'
      },
      {
        id: 3,
        name: 'Hello World',
        image: 'http://2.bp.blogspot.com/-fQsPUJD-SNQ/URXu2vvynRI/AAAAAAAAEjg/bn7XWZnqt98/s1600/hi-red-panda.jpg',
        caption: 'This is a caption'
      },
      {
        id: 4,
        name: 'They do not actually like pizza',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lesser_panda_standing.jpg/440px-Lesser_panda_standing.jpg',
        caption: 'This is a caption'
      },
      {
        id: 5,
        name: 'Eating',
        image: 'https://redpandanetwork.org/blog/wp-content/uploads/2012/02/redpanda-eating.jpg',
        caption: 'This is a caption'
      },
      {
        id: 6,
        name: "Aren't they adorable",
        image: 'https://i.ytimg.com/vi/b6dT4kyVUuY/maxresdefault.jpg',
        caption: 'This is a caption'
      }
    ];

    return (
      <div id={tag} style={{backgroundColor: color}}>
        <Tiles data={data} />
      </div>
    );
  }
}

export default Gallery;

import React, {Component} from 'react';
import HomePage from './pages/HomePage';
import ReproductionAndDiet from './pages/Reproduction';
import Reproduction from './pages/Reproduction';
import Diet from './pages/Diet';
import NavBar from './pages/NavBar';
import InterestingFacts from './pages/InterestingFactsPage';
import BehaviorAndBiology from './pages/BehaviorAndBiology';
import Gallery from './pages/Gallery';

const pages = {
  home: {tag: 'home', color: '#588C7E'},
  diet: {tag: 'diet', color: '#F2E394'},
  //   interestingFacts: 'interestingFacts',
  reproduction: {tag: 'reproduction', color: '#F2AE72'},
  gallery: {tag: 'gallery', color: '#D96459'},
  behaviorAndBiology: {tag: 'behaviorAndBiology', color: '#8C4646'}
  // emailForm: 'emailForm'
};
class RedPanda extends Component {
  render() {
    return (
      <div>
        <NavBar pages={pages} />
        <HomePage {...pages.home} />
        <Reproduction {...pages.reproduction} />
        <Diet {...pages.diet} />
        <Gallery {...pages.gallery} />
        <BehaviorAndBiology {...pages.behaviorAndBiology} />
      </div>
    );
  }
}

export default RedPanda;

import React from 'react';
import './homePage.css';

import img1 from './images/01.jpg';
import img2 from './images/02.jpg';
import img3 from './images/03.jpg';
import img4 from './images/04.jpg';
import img5 from './images/05.jpg';
import img6 from './images/06.jpg';
import Slideshow from './slideshow';

const collection = [
  { src: img1, caption: " one" },
  { src: img2, caption: " two" },
  { src: img3, caption: " three" },
  { src: img4, caption: " four" },
  { src: img5, caption: " five" },
  { src: img6, caption: " six" },
];

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`3000`}
        />
      </div>
    );
  }
}
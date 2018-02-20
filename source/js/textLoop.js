import 'babel-polyfill';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

import '../css/text-loop.scss';

class TextLoop extends Component {
  render() {
    return (
      <div>
        <h2>I'm a:
        <TypistLoop interval={1000}>
          {[
            'Hello World',
            'Good Morning',
            'Bye',
          ].map(text => <Typist key={text} startDelay={300} cursor={{show: false}}>{text}</Typist>)}
        </TypistLoop>
        </h2>
        <Link to='/'>Homepage</Link>
      </div>
    );
  }
}

export default TextLoop

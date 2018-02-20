import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/style.scss';

import girlImage from '../images/lonely-girl.jpg'

class Hello extends Component {
  render() {
    return (
      <div>
        <div className="grid-container">
          <h1 className="title">Hello {this.props.name}!</h1>
          <img src={girlImage} alt='Lonely Girl - picture taken by vanss472' />
          <Link to='/loop' className="link">Text Loop Demo</Link>
        </div>
      </div>
    )
  }
}

const fn = (name) => {
  console.log('Hello ' + name + '!');
}
fn('World')

export default Hello

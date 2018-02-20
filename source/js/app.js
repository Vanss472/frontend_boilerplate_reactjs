import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header'
import Hello from './helloMessage'
import TextLoop from './textLoop'

ReactDOM.render((
  <Router>
  <div>
    <Header />
    <Route exact path="/" render={ () => (
      <Hello name="Vanessa" />
    )} />
    <Route path="/loop" component={TextLoop} />
  </div>
  </Router>
  ), document.getElementById('root')
);



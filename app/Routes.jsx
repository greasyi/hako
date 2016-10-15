import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './App';
import About from './About';
import Home from './Home';
import Posts from './Posts';

module.exports = (
  <Route className='app' path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/about' component={About} />
    <Route path='/posts' component={Posts} />
    <Route path='/posts/:postId' component={Posts} />
  </Route>
);

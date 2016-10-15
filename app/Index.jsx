import React from 'react';
import {render} from 'react-dom';
import {browserHistory, Router} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Routes from './Routes';

function REDUCER(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const STORE = createStore(REDUCER);

render((
  <Provider store={STORE}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>
), document.getElementById('app'));

import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';

export default function App({children}) {
  return (
    <div>
      <h1>Nav Section</h1>
      <ul>
        <li><IndexLink activeClassName='active-app-section' to='/'>Home</IndexLink></li>
        <li><Link activeClassName='active-app-section' to='/about'>About</Link></li>
        <li><Link activeClassName='active-app-section' to='/posts'>Posts</Link></li>
      </ul>
      <hr />
      {children}
    </div>

  );
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node
  ])
};

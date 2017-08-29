import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav>
          <Link to="/">SplashPage</Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="portfolio">Portfolio</Link>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout;

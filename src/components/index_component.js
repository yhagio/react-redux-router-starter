import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import '../../style/style.scss';

export default class IndexComponent extends Component {
  render() {
    return (
      <div>
        <h1>IndexComponent Route</h1>
        <Link to="/sample">Sample Route</Link>
      </div>
    );
  }
}

export default IndexComponent;

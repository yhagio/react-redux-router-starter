import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import '../../style/style.scss';

export default class Sample extends Component {
  render() {
    return (
      <div>
        <h1>Sample Route</h1>
        <Link to="/">Index Route</Link>
      </div>
    );
  }
}

export default Sample;

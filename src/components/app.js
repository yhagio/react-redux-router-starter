import React from 'react';
import { Component } from 'react';

import '../../style/style.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Redux starter</h1>
        {this.props.children}
      </div>
    );
  }
}

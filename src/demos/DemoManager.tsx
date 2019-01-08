import React, { Component } from 'react';
import ReduxCounter from './ReduxCounter';

class DemoManager extends Component {
  render() {
    return (
      <div>
        <h2>Demo Manager</h2>
        <ReduxCounter/>
      </div>
    );
  }
}

export default DemoManager;


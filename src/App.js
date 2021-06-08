
import React, { Component } from 'react';
import RouterTag from './router';
import './App.less';
export default class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', background: '#f1f1f1', }}>
        <div style={{ background: '#fff', padding: '20px' }}>
          <RouterTag />
        </div>
      </div>
    );
  }
}

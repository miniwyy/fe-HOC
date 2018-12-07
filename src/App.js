import React, { Component } from 'react';
import B from './components/B';
import C from './components/C';
import F from './components/F';
import G from './components/G';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <B name={"yongyu"} age={18} />
        <C />
        <F />
        <G />
      </div>
    );
  }
}

export default App;

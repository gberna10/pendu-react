import React, { Component } from 'react';
import Keyboard from './Keyboard';
import Word from './Word';
import './App.css';
//import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <Word />
      <Keyboard />
    );
  }
}

export default App;

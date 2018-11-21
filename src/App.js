import React, { Component } from 'react';
import Keyboard from './Keyboard';
import Button from '@material-ui/core/Button';
import './App.css';



//import Button from '@material-ui/core/Button';



class App extends Component {
  
  state = {
    mainPage: 'player',
  };

  changeMainPage = (page) => {
    this.setState({
      mainPage: page,
    })
  }
  
  render() {
    if (this.state.mainPage === 'player') {
      return (
        <Button onClick={() => this.changeMainPage('search')}>Valider Joueur</Button>
      );
    } else if (this.state.mainPage === 'search') {
      return (
        <React.Fragment>
          <Keyboard  />
        </React.Fragment>
        
      );
    }
  }
}

export default App;

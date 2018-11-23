import React, { Component } from 'react';
import Game from './Game';
import Button from '@material-ui/core/Button';
import './App.css';



//import Button from '@material-ui/core/Button';



class App extends Component {
  
  state = {
    mainPage: 'game',
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
    } else if (this.state.mainPage === 'game') {
      return (
        <React.Fragment>
          <Game  />
        </React.Fragment>
        
      );
    }
  }
}

export default App;

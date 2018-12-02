import React, { Component } from 'react';
import Game from './Game';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './App.css';

// styles material
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

  control: {
    flexGrow: 1,
  },
});


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
    const { classes } = this.props;
    if (this.state.mainPage === 'player') {
      return (
        <div>
          <Grid container className={classes.control} justify="center" spacing={24}>
            <Grid item xs={6}>
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  Le Jeu du Pendu.
                </Typography>
                <Typography component="p">
                  La règle du jeu est très simple. Vous devez trouver un mot secret qui sera chargé aléatoirement. 
                  Le mot sera masqué et se sera à vous de le découvrir en cherchant les lettres qui le compose. 
                  Pour cela il vous suffira de cliquez sur une touche du clavier virtuel qui s'affichera en bas de votre écran. 
                  Si vous trouvez la bonne lettre, elle apparaitra dans le mot secret sinon vous perdez un point. 
                  Attention vous n'avez que 7 chances. 
                </Typography>
                <Button onClick={() => this.changeMainPage('game')}>Commencer La partie</Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
        
      );
    } else if (this.state.mainPage === 'game') {
      return (
        <React.Fragment>
          <Game getMainPage={this.changeMainPage.bind(this)} />
        </React.Fragment>
        
      );
    }
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

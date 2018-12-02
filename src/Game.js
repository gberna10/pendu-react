import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Word from './Word';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CanvasError from './includes/CanvasError';



let findWord = [
    "taureau",
    "riz",
    "petrole",
    "tableau",
    "peinture",
    "routage",
    "ventilateur",
    "lampe",
    "apache",
    "goudron",
    "kangourou",
];

const Word = (props) => {
  const style = {
    color: "green",
  }

  const style2 = {
    color: "red",
  }

  const style3 = {
    color: "blue",
  }

  const style4 = {
    color: "violet",
  }
  
  return(
    <div>
      <h1 style={style}>{props.Letter}</h1>
      <h2 style={style2}>{props.HangWordResult}</h2>
      <h3 style={style3}>{props.PhraseResult}</h3>
      <h4 style={style4}>{props.Error}</h4>
    </div>
  );
}


const Score = (props) => {
  const styleScore = {
    color: "DarkRed",
  }

  return(
    <div>
      <h1 style={styleScore}>Vous avez trouvé {props.VotreScore} mot(s)</h1>
    </div>
  )
}
// styles material
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});


class Game extends Component {

  state = {
    spacing: '16',
    open: false,
    usedLetters: new Set([]),
    phrase: findWord[Math.floor(Math.random() * 11)].toUpperCase(),
    hangWord: "",
    score: 0,
    error: 7
};

  // Open Modal
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  // Close Modal
  handleClose = () => {
    this.setState({ open: false });
  };

  refreshGame = () => {
    this.setState({
      usedLetters: new Set([]),
      phrase: findWord[Math.floor(Math.random() * 11)].toUpperCase(),
      hangWord: "",
      error: 7
    });
    this.handleClose();
  }

  leaveGame = () => {
    this.props.getMainPage("player");
    this.handleClose();
  }

  handleClick(value) {

      if (this.state.usedLetters.has(value)) {
        alert("votre lettre existe déjà");
      } else {
        this.setState({ usedLetters: this.state.usedLetters.add(value) })
        let verify = this.verifyWord(this.state.phrase, value);
        if (verify === true) {
          let temp = this.computeDisplay(this.state.phrase, this.state.usedLetters);
          this.setState({hangWord: temp});    
        } else {
          this.setState({error: this.state.error - 1});
        }
        
      } 
  }
  

  verifyWord(phrase, letter) {
    let temp = [];
    temp = phrase.split('');
    if (temp.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  verifyGame(phrase, hangWord) {
    if (phrase === hangWord && this.state.error >= 1) {
      this.setState({hangWord: "*"});
      this.setState({score: this.state.score + 1});
      this.handleClickOpen();
    } else if (this.state.error === 0) {
      this.setState({error: -1})
      this.handleClickOpen();
    }

  }

  computeDisplay(phrase, usedLetters) {

    return phrase.replace(/\w/g,
      (letter) => (usedLetters.has(letter) ? letter + ' ' : '_ ')
    );
  }

  componentDidMount() {
    let hangTemp = this.computeDisplay(this.state.phrase, this.state.usedLetters);
    this.setState({hangWord: hangTemp});
    this.updateCanvas();
  }
  
  componentDidUpdate() {
    this.verifyGame(this.state.phrase, this.state.hangWord.replace(/ /g,""));
    this.updateCanvas();
  }
  
  updateCanvas() {
    var ctx = this.refs.canvas.getContext('2d');
    CanvasError.getCanvas(ctx, this.state.error);
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    const stylingCanvas = {
      background: "AliceBlue",
    }
    return (
        <React.Fragment>
          <div>
            {/* <Button onClick={this.handleClickOpen}>Open alert dialog</Button> */}
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {this.state.error > 0 ? 'Bravo !! Vous avez trouvé le Mot' : 'Vous avez Perdu'}          
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.refreshGame.bind(this)} color="primary">
                  Continuer
                </Button>
                <Button onClick={this.leaveGame} color="primary" autoFocus>
                  Arrêter
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <Score VotreScore={this.state.score} />
          <Grid container className={classes.root} justify="center" spacing={24}>
            <Grid item xs={4}>
              <canvas style={stylingCanvas} ref="canvas" width={300} height={300}/>
            </Grid>
            <Grid item xs={12}>
              <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                <Word Letter={this.state.usedLetters} Error={this.state.error} HangWordResult={this.state.hangWord} PhraseResult={this.state.phrase}/>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.control}>
                <Grid container>
                  {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
                    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].map(value => (
                    <Button key={value} onClick={() => this.handleClick(value)}>{value}</Button>
                ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>
    );
  }
}

Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);
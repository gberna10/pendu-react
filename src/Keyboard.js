import React from 'react';
import PropTypes from 'prop-types';
//import Word from './Word';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

let secretWord = "";

function rect(props) {
  const {ctx, x, y, width, height} = props;
  ctx.fillRect(x, y, width, height);
}

/* function computeDisplay(phrase, usedLetters) {
  return phrase.replace(/\w/g,
    (letter) => (usedLetters.has(letter) ? letter : '_')
  )
} */



// function printWord(phrase, usedLetters) {
//   let tabPhrase = phrase.split('');
//   let hangWord = [];
//   for (let i = 0; i < tabPhrase.length; i++) {
//     if (tabPhrase[i] == usedLetters) {
//       hangWord.push(usedLetters);
//     } else {
//       hangWord.push("_");
//     }
//   }

//   return hangWord.join('');
// }



const Word = (props) => {
  const style = {
    color: "green",
  }

//  secretWord = computeDisplay("trafalgar","a")
  
  return(
    <h1 style={style}>{props.Letter}</h1>
  );
}

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


class Keyboard extends React.Component {

  state = {
    spacing: '16',
    usedLetters: [],
    hangWord: "",
    phrase: 'benoit'
  };

  handleClick = (value) => {
    this.setState({usedLetters:[...this.state.usedLetters, value]});
  };

  computeDisplay(phrase, usedLetters) {
    
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.has(letter) ? letter : '_')
    )

  } 


  componentDidMount() {
    alert("base" +  this.state.usedLetters);
    this.updateCanvas();
  }
  
  componentDidUpdate() {
    //this.computeDisplay(this.state.phrase, this.state.usedLetters);
    this.updateCanvas();
  }
  
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.clearRect(0,0, 300, 300);
    // draw children “components”
    //rect({ctx, x: 10, y: 10, width: 50, height: 50});
    //rect({ctx, x: 110, y: 110, width: 50, height: 50});
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
        
        <Grid container className={classes.root} justify="center" spacing={24}>
          <Grid item xs={4}>
            <canvas ref="canvas" width={300} height={300}/>
          </Grid>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              <Word Letter={this.state.usedLetters} />
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
    );
  }
}

Keyboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Keyboard);
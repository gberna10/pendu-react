import React from 'react';
import PropTypes from 'prop-types';
//import Word from './Word';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';



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
]

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

//  secretWord = computeDisplay("trafalgar","a")
  
  return(
    <div>
      <h1 style={style}>{props.Letter}</h1>
      <h2 style={style2}>{props.HangWordResult}</h2>
      <h3 style={style3}>{props.PhraseResult}</h3>
    </div>
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

  constructor( props ){
    super( props );
  }

  state = {
    spacing: '16',
    usedLetters: [''],
    phrase: findWord[Math.floor(Math.random() * 11)].toUpperCase(),
    hangWord: ""
  };

  handleClick(value) {
    if (this.state.usedLetters.includes(value)) {
      alert("votre lettre existe déjà");
    } else {
      this.setState({usedLetters:[...this.state.usedLetters, value]});
      console.log("used ",this.state.usedLetters," phrase = ",this.state.phrase);
      let temp = this.computeDisplay(this.state.phrase, this.state.usedLetters);
      this.setState({hangWord: temp});
    }
    
  }


  computeDisplay(phrase, usedLetters) {

    return phrase.replace(/\w/g,
      (letter) => (usedLetters.includes(letter) ? letter : '_')
    );
  }

  componentDidMount() {
    let hangTemp = this.computeDisplay(this.state.phrase, this.state.usedLetters);
    this.setState({hangWord: hangTemp});
    //this.setState({phrase: findWord[Math.floor(Math.random() * 11)]})
    this.updateCanvas();
  }
  
  componentDidUpdate() {
    //alert(this.getRandomInt(23)); */

    

    /* let temp = this.computeDisplay(this.state.phrase, this.state.usedLetters);
    this.setState({hangWord: temp}); */
    /* let temp = this.computeDisplay(this.state.phrase, this.state.usedLetters);
      this.setState({hangWord: temp}); */
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
              <Word Letter={this.state.usedLetters} HangWordResult={this.state.hangWord} PhraseResult={this.state.phrase}/>
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
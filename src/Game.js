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


class Game extends React.Component {

  state = {
    spacing: '16',
    usedLetters: new Set([]),
    phrase: findWord[Math.floor(Math.random() * 11)].toUpperCase(),
    hangWord: "",
    error: 7
  };


  handleClick(value) {
    //console.log("caca = ", this.state.usedLetters);

      if (this.state.usedLetters.has(value)) {
        alert("votre lettre existe déjà");

      } else {
        //this.setState({usedLetters:[...this.state.usedLetters, value]});
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

    if (this.state.error === 0) {
      alert("arlette");
    }

    this.updateCanvas();
  }
  
  updateCanvas() {
    var ctx = this.refs.canvas.getContext('2d');

    switch(this.state.error) {
      case 6:
        ctx.beginPath();
        ctx.moveTo(50, 250);
        ctx.lineTo(150, 250);
        ctx.stroke();
        ctx.closePath();
        break;
      case 5:
        ctx.beginPath();
        ctx.moveTo(100, 50);
        ctx.lineTo(100, 250);
        ctx.stroke();
        ctx.closePath();
        break;
      case 4:
        ctx.beginPath();
        ctx.moveTo(100, 50);
        ctx.lineTo(200, 50);
        ctx.stroke();
        ctx.closePath();
        break;
      case 3:
        ctx.beginPath();
        ctx.moveTo(100,70);
        ctx.lineTo(130, 50);
        ctx.stroke();
        ctx.closePath();
        break;
      case 2:
        alert("gogo");

    } 
    

    

    

    


    

    // draw children “components”
    //rect({ctx, x: 10, y: 10, width: 50, height: 50});
    //rect({ctx, x: 110, y: 110, width: 50, height: 50});
  }

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    const stylingCanvas = {
      background: "AliceBlue",
    }
    return (
        
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
    );
  }
}

Keyboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Keyboard);
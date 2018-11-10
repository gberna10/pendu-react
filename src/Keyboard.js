import React from 'react';
import PropTypes from 'prop-types';
import Word from './Word';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';

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
    letter: '',
  };

  handleClick = (value) => {
    this.setState({
      letter: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            <Word Checko={this.state.letter} />
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
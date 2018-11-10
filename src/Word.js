import React, { Component } from 'react';

const ShowWord = (props) => {
  return(
    <h1>{props.Checko}</h1>
  );
};

const InformaticWords = ['toto'];


class Word extends Component {
  render() {
    return(
      <ShowWord />
    );
  }
}


/* for (var i = 0; i < chaine.length; i ++) {
    if ()

    else {
      console.log("")
    }

  }*/


export default Word;




  
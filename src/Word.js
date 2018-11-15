import React, { Component } from 'react';


const ShowWord = (props) => {
  return(
    <h1>{props.Checko}</h1>
  );
};

const InformaticWords = ['toto'];


function computeDisplay(phrase, usedLetters) {
  return phrase.replace(/\w/g,
    (letter) => (usedLetters.has(letter) ? letter : '_')
  )
}

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




  
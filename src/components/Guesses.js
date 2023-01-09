import React from "react";
import wordBank from '../wordBank';

class Guesses extends React.Component {




    // DO NOT CHANGE - reset state when new game starts
    resetState() {
      let i = Math.floor(Math.random() * wordBank.length);
        this.setState({
        answer: wordBank[i],
        g: 0,
        curGuess: "",
        guesses: [{key: "1", text: "     "}, {key: "2", text: "     "}, {key: "3", text: "     "}, {key: "4", text: "     "}, {key: "5", text: "     "}, {key: "6", text: "     "}]
      })
    }

    // DO NOT CHANGE - connected components - update current guess as user types
    type(e) {
      this.setState({
          curGuess: e.target.value
      });
    }

    // DO NOT CHANGE - guess checking logic
    submit(e, guess) {
      console.log(this.state.curGuess);
      if(this.state.curGuess.length === 5) {
        // game over - win
        if(this.state.answer === this.state.curGuess) {
          alert("Congrats, you won!");
          this.resetState();
        }
        // game over - loss
        else if(this.state.g === 5) {
          alert("Sorry! The correct word was " + this.state.answer);
          this.resetState();          
        }
        // let the player guess again
        else {
          let newGuesses = [...this.state.guesses];
          newGuesses[this.state.g] = {key: this.state.g, text: this.state.curGuess};
          this.setState((state, props) => ({
            g: state.g+1,
            guesses: newGuesses
          }));
        }
      }
      else {
        alert("Please enter a word with exactly 5 letters")
      }
      this.setState({
        curGuess: ""
      });
    }


    
    render() {
        return (
            <div>
                <h2>Wordniak</h2>
            </div>
        );
    }
  }

export default Guesses;
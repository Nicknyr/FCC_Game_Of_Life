import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard.js';
import Controls from './Controls.js';
import update from 'immutability-helper';
import Info from './Info.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      boardHeight: 50,
      boardWidth: 30,
      iterations: 10,
      reset: false,
      alive: false,
      board: [],
      randomNum: ''
    };

    //this.state.board = new Array(this.state.boardHeight).fill(new Array(this.state.boardWidth).fill(0));
    this.state.board = Array(this.state.boardHeight).fill(0).map(_ =>
                        Array(this.state.boardWidth).fill(0));
  }

  // Allows user to click button and change size of game board
  selectBoardSize = (width, height) => {
    this.setState({
      boardHeight: height,
      boardWidth: width,
      //board: new Array(this.state.boardHeight).fill(new Array(this.state.boardWidth).fill(0))
      board: Array(this.state.boardHeight).fill(0).map(_ =>
              Array(this.state.boardWidth).fill(0))
    });
  }

  // Resets game board back to blank when user clicks reset button
  onReset = () => {
    this.setState({
      //board: new Array(this.state.boardHeight).fill(new Array(this.state.boardWidth).fill(0)) }
      board: Array(this.state.boardHeight).fill(0).map(_ =>
              Array(this.state.boardWidth).fill(0))
    });
  }

  // Generates random number
  getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // This is the function I am trying to build and generate a random starting game board with
  componentDidMount = () => {
    const data = this.state.board;

    const startingBoard = data.map(a => a.map(Math.random));

    console.log('Starting board contains ' + startingBoard);

    // After startingBoard is working I can set state with startingBoard
    this.setState({
       board: startingBoard
    });
  }



  // Called when user clicks on specific square. Changes color of square depending on if it's alive or not
  isSquareAlive = (x, y) => {
    const data = this.state.board;
    const ySquare = y;
    const xSquare = x;

    const newData = data.map((row, y) => {
      return y === ySquare ? (
        row.map((cell, x) => x === xSquare ? (cell + 1) % 2 : cell)
      ) : (
        row
      )
    })

    this.setState({ board: newData });

  }



  render() {
    /*console.log('Random number is : ' + this.state.randomNum);*/
    return (
      <div>
      <div className="game-container">

      <GameBoard
        height={this.state.boardHeight}
        width={this.state.boardWidth}
        reset={this.onReset}
        board={this.state.board}
        alive={this.isSquareAlive}
        isAlive={this.state.alive}
      />

      <Controls
        selectBoardSize={this.selectBoardSize}
        iterations={this.state.iterations}
        onReset={this.onReset}
      />

      </div>

      <div className="info-container">
        <Info />
      </div>
      </div>
    );
  }
}

export default App;

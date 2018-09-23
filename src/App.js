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

    this.state.board = Array(this.state.boardHeight).fill(0).map(_ =>
                        Array(this.state.boardWidth).fill(0));
  }

  // Allows user to click button and change size of game board
  selectBoardSize = (width, height) => {
    this.setState({
      boardHeight: height,
      boardWidth: width,
      board: Array(this.state.boardHeight).fill(0).map(_ =>
              Array(this.state.boardWidth).fill(0))
    });
    this.onChangeBoardSize();
  }

  onChangeBoardSize = () => {
    const height = this.state.boardHeight;
    const width = this.state.boardWidth;
    const data = this.state.board;
    // Creates random decimal number between 0 and 1
    const startingBoard = data.map(a => a.map(Math.random));
    // Rounds decimal numbers to either 0 or 1 so the grid can display whether the cell is alive or dead
    const rounded = startingBoard.map(a => a.map(Math.round));

    this.setState({
       boardHeight: height,
       boardWidth: width,
       board: rounded
    });

  }

  // Resets game board back to blank when user clicks reset button
  onReset = () => {
    this.setState({
      board: Array(this.state.boardHeight).fill(0).map(_ =>
              Array(this.state.boardWidth).fill(0))
    });
  }

  // Creates random board when the user loads the page
  componentDidMount = () => {
    const data = this.state.board;
    // Creates random decimal number between 0 and 1
    const startingBoard = data.map(a => a.map(Math.random));
    // Rounds decimal numbers to either 0 or 1 so the grid can display whether the cell is alive or dead
    const rounded = startingBoard.map(a => a.map(Math.round));

    this.setState({
       board: rounded
    });
  }

/*  componentDidUpdate = (prevProps) => {
    const data = this.state.board;
    // Creates random decimal number between 0 and 1
    const startingBoard = data.map(a => a.map(Math.random));
    // Rounds decimal numbers to either 0 or 1 so the grid can display whether the cell is alive or dead
    const rounded = startingBoard.map(a => a.map(Math.round));

    console.log('Previous props is : ' + prevProps);

    if(this.state.data !== prevProps.data) {
      this.setState({
         board: prevProps.data
      });
    }
  }
*/


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

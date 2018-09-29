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
      nextBoard: [],
      randomNum: ''
    };

    this.state.board = Array(this.state.boardHeight).fill(0).map(_ =>
                        Array(this.state.boardWidth).fill(0));
  }


  onChangeBoardSize = (width, height) => {
    const data = Array(height).fill(0).map(_ => Array(width).fill(0));
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
    setInterval(this.timer, 1000);
    const data = this.state.board;
    // Creates random decimal number between 0 and 1
    const startingBoard = data.map(a => a.map(Math.random));
    // Rounds decimal numbers to either 0 or 1 so the grid can display whether the cell is alive or dead
    const rounded = startingBoard.map(a => a.map(Math.round));

    this.setState({
       board: rounded
    });


  }

  timer = () => {
    const data = this.state.board;
    // Creates random decimal number between 0 and 1
    const startingBoard = data.map(a => a.map(Math.random));
    // Rounds decimal numbers to either 0 or 1 so the grid can display whether the cell is alive or dead
    const rounded = startingBoard.map(a => a.map(Math.round));

    this.setState({
       board: rounded
    });
  }

  // Should apply Game of Life rules and decide with squares are alive/dead every time the board is updated
  componentDidUpdate = (prevProps, prevState) => {
    //console.log('PrevState is : ' + prevProps, prevState);
    const oldBoard = this.state.board;
    const newBoard = this.state.nextBoard;

    console.log('oldBoard ' + oldBoard);
    console.log('newBoard ' + newBoard);

/*    // Checks that board has changed and prevents infinite loop in componentDidUpdate
      for(let x = 0; x < this.state.boardHeight; x++) {
        for(let y = 0; y < this.state.boardWidth; y++) {
          let neighborCount = 0;
          // Game of Life logic pertaining to squares being alive/dead
          neighborCount += oldBoard[x - 1][y - 1];
          neighborCount += oldBoard[x][y - 1];
          neighborCount += oldBoard[x + 1][y - 1];
          neighborCount += oldBoard[x - 1][y];
          neighborCount += oldBoard[x + 1][y];
          neighborCount += oldBoard[x - 1][y + 1];
          neighborCount += oldBoard[x][y + 1];
          neighborCount += oldBoard[x + 1][y + 1];

          console.log('neighborCount ' + neighborCount[x]);

          // If square has 2 live neighbors it stays alive
          if(neighborCount == 2) {
            newBoard[x][y] = oldBoard[x][y];
          }
          // If square has exactly 3 neighbors a new life square is born
          else if (neighborCount == 3) {
            newBoard[x][y] = 1;
          }
          // Is square has more than 3 live neighbors it dies
          else if(neighborCount > 3){
            newBoard[x][y] = 0;
          }
        }
      }

      if(newBoard !== oldBoard) {
        // after applying rules set the nextBoard
        this.setState({ board: newBoard });
      }
      */

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
        onChangeBoardSize={this.onChangeBoardSize}
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

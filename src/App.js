import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard.js';
import Controls from './Controls.js';
import update from 'immutability-helper';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      boardHeight: 50,
      boardWidth: 30,
      iterations: 10,
      reset: false,
      alive: false,
      board: []
    };

    this.state.board = new Array(this.state.boardHeight).fill(new Array(this.state.boardWidth).fill(0));
  }

  selectBoardSize = (width, height) => {
    this.setState({
      boardHeight: height,
      boardWidth: width,
      board: new Array(this.state.boardHeight).fill(new Array(this.state.boardWidth).fill(0))
    });
  }

/*  componentDidMount = () => {
    this.setState({
    board: new Array(this.state.boardHeight).fill(new Array(this.state.boardWidth).fill(0))
    })
  }
*/
/*  onReset = () => {
    this.setState({ reset: !this.state.reset });
    console.log("onReset triggered");
  }
*/


  alive = (x, y) => {
    console.log(x, y);

    const data = this.state.board;
    const ySquare = y;
    const xSquare = x;
    console.log("X square is : " + xSquare);
    console.log("Y square is : " + ySquare);

    const updateData = update(data, {
      xSquare: {$set: this.setState({ alive: !this.state.alive })}
    });

  }



  render() {
    console.log(this.state.board);
    return (
      <div className="container">
        <h1>Conway's Game of Life</h1>

      <GameBoard
        height={this.state.boardHeight}
        width={this.state.boardWidth}
        reset={this.onReset}
        board={this.state.board}
        alive={this.alive}
        isAlive={this.state.alive}
      />

      <Controls
        selectBoardSize={this.selectBoardSize}
        iterations={this.state.iterations}
        onReset={this.onReset}
      />

      </div>
    );
  }
}

export default App;

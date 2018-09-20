import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard.js';
import Controls from './Controls.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      boardHeight: 50,
      boardWidth: 30,
      iterations: 10,
      reset: false
      //alive: false
    };
  }

  selectBoardSize = (width, height) => {
    this.setState({
      boardHeight: height,
      boardWidth: width
    });
  }

/*  onReset = () => {
    this.setState({ reset: !this.state.reset });
    console.log("onReset triggered");
  }
*/

/*
  alive = () => {
    this.setState({ alive: !this.state.alive });
  }
*/


  render() {
    return (
      <div className="container">
        <h1>Conway's Game of Life</h1>

      <GameBoard
        height={this.state.boardHeight}
        width={this.state.boardWidth}
        alive={this.alive}
        reset={this.onReset}
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

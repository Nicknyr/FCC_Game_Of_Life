import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      boardHeight: 10,
      boardWidth: 50
    };
  }

  render() {
    return (
      <div>
        <table className="table-board"></table>
          <tbody>
            {Array(this.state.boardHeight).fill(1).map((el, i) => {
              return (
                <Square key={i} />
              );
            })}
          </tbody>
      </div>
    );
  }
}

export default App;

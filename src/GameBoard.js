import React, { Component } from 'react';
import Square from './Square.js';

const GameBoard = (props) => {
    return (
      <div>
        <table className="game-board">
          <tbody>
            {Array(props.height).fill(1).map((el, i) => {
              return (
                <tr key={i}>
                  {Array(props.width).fill(1).map((el, j) => {
                    return (
                      <Square key={j} alive={props.alive}/>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
         </table>
      </div>
    );
}

export default GameBoard;

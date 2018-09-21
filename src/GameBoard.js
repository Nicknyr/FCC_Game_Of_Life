import React, { Component } from 'react';
import Square from './Square.js';

const GameBoard = (props) => {
  return (
    <div>
      <table className="game-board">
        <tbody>
          {props.board.map((row, y) => {
            return <tr key={y}>
              {row.map((ea, x) => {
                return (
                  <Square
                    key={x}
                    x={x}
                    y={y}
                    isAlive={ea}
                    aliveCallback={props.alive}
                  />
                );
              })}
            </tr>;
          })}
        </tbody>
       </table>
    </div>
  );
}

export default GameBoard;

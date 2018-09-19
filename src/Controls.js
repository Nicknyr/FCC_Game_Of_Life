import React, { Component } from 'react';

const Controls = (props) => {

    return (
      <div className="controls">
        <h2>Controls</h2>
        <h3>Board Size:</h3>
        <button onClick={() => {props.selectBoardSize(50, 30)}}>Small</button>
        <button onClick={() => {props.selectBoardSize(70, 30)}}>Medium</button>
        <button onClick={() => {props.selectBoardSize(100, 30)}}>Large</button>
        <h3>Iterations:</h3>
        <p>{props.iterations}</p>
        <button onClick={() => {props.onReset()}}>Reset</button>
      </div>
    );
}

export default Controls;

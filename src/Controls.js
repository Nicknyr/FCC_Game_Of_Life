import React, { Component } from 'react';

const Controls = (props) => {

    return (
      <div className="controls">
        <h2>Controls</h2>
        <div className="controls-section">
          <h3>Board Size:</h3>
          <button onClick={() => {props.selectBoardSize(30, 50)}}>Small</button>
          <button onClick={() => {props.selectBoardSize(50, 50)}}>Medium</button>
          <button onClick={() => {props.selectBoardSize(70, 50)}}>Large</button>
        </div>
        <div className="controls-section">
          <h3>Iterations:</h3>
          <p>{props.iterations}</p>
        </div>
          <button className="reset-button" onClick={() => {props.onReset()}}>Reset</button>
      </div>
    );
}

export default Controls;

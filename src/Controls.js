import React from 'react';

const Controls = (props) => {

    return (
      <div className="controls">
        <h2>Controls</h2>
        <div className="controls-section">
          <h3>Board Size:</h3>
          <button onClick={() => {props.onChangeBoardSize(30, 30)}}>Small</button>
          <button onClick={() => {props.onChangeBoardSize(50, 30)}}>Medium</button>
          <button onClick={() => {props.onChangeBoardSize(70, 30)}}>Large</button>
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

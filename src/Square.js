import React, { Component } from 'react';

const Square = (props) => {
  return (
    <td  className={`Square ${props.isAlive ? "active" : "inactive"}`}  onClick={() => props.aliveCallback(props.x, props.y)}></td>
  );
}

export default Square;

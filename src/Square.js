import React, { Component } from 'react';

/*class Square extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alive: false
    }
  }

  alive = () => {
    this.setState({ alive: !this.state.alive });
  }


  render(){
    return (
        <td  className={`Square ${this.state.alive ? "active" : "inactive"}`}  onClick={() => this.alive()}></td>
    );
  }
}*/

const Square = (props) => {
  return (
    <td  className={`Square ${props.isAlive ? "active" : "inactive"}`}  onClick={() => props.aliveCallback(props.x, props.y)}></td>
  );
}

export default Square;

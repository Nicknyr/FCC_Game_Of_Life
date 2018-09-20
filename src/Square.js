import React, { Component } from 'react';

class Square extends Component {
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
}

/*const Square = (props) => {
  return (
    <td  className={`Square ${props.alive ? "active" : "inactive"}`}  onClick={() => props.alive()}></td>
  );
}*/

export default Square;

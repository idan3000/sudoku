import React, { Component } from "react";

class NumberBig extends Component {
  state = {};
  render() {
    return <div className="number--solve">{this.props.data.chosen}</div>;
  }
}

export default NumberBig;

import React, { Component } from "react";
import Number from "./Number";

class Block extends Component {
  render() {
    return (
      <div className="block">
        {this.props.data.map((x, i) => {
          return (
            <Number
              data={x}
              key={i}
              id={{ numberId: i, ...this.props.id }}
              pick={this.props.pick}
            />
          );
        })}
      </div>
    );
  }
}

export default Block;

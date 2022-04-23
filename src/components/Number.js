import React, { Component } from "react";
import NumberBig from "./NumberBig.js";
import NumberSmall from "./NumberSmall.js";

class Number extends Component {
  render({ data } = this.props) {
    if (data.chosen) return <NumberBig data={data} />;

    return (
      <div className="nunber--unsolve">
        {data.options.map((x, i) => {
          return (
            <NumberSmall
              value={x}
              id={this.props.id}
              key={i}
              pick={this.props.pick}
            />
          );
        })}
      </div>
    );
  }
}

export default Number;

import React, { Component } from "react";

class NumberSmall extends Component {
  Number = () => (
    <button
      className="number__small number__small--active"
      onClick={() => this.props.pick(this.props.id, this.props.value)}
    >
      {this.props.value}
    </button>
  );
  NoNumber = () => (
    <div className="number__small number__small--deactive"></div>
  );
  IsNumberSmall = (props) =>
    props.value > 0 ? <this.Number value={props.value} /> : <this.NoNumber />;
  render() {
    return (
      <React.Fragment>
        <this.IsNumberSmall
          value={this.props.value}
          id={this.props.id}
          pick={{ valueId: this.props.value, ...this.props.id }}
        />
      </React.Fragment>
    );
  }
}

export default NumberSmall;

import React, { Component } from "react";
import Block from "./components/Block";
import { pick, preGame } from "./controler";

class App extends Component {
  state = {
    answers: preGame(),
    isRedy: true,
    logIt: 0,
  };

  render() {
    return (
      <div className="play">
        {this.state.answers.map((x, index) => (
          <Block
            data={x}
            key={index}
            id={{ blockId: index }}
            pick={pick.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Block from "./components/Block";
import { pick } from "./controler";

class App extends Component {
  state = {
    arr19: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    answers: [
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], []],
    ],
    temp: [],
    isRedy: true,
    logIt: 0,
  };
  // constructor() {
  //   super();
  // }
  componentWillMount() {
    this.setState(this.preGame);
  }
  preGame = (state) => {
    console.log(state);
    state.answers.forEach((arrBig, iBig) => {
      arrBig.forEach((x, iSmall) => {
        if (x.length === 0)
          state.answers[iBig][iSmall] = {
            options: [...state.arr19],
            chosen: undefined,
          };
      });

      console.log(state);
      return state;
    });
  };

  render() {
    return (
      <div className="play">
        {this.state.answers.map((x, iBig) => (
          <Block
            data={x}
            key={iBig}
            id={{ blockId: iBig }}
            pick={pick.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default App;

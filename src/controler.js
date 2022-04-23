// import React from "react";

export const pick = function (id, value) {
  this.setState((state) => {
    state.isRedy = false;
    const miniME = (state, id, value) => {
      state.isRedy = true;
      console.log(`start`, value);

      state.answers[id.blockId][id.numberId].chosen = value;

      state.answers[id] = removeFromeBlock(state.answers[id.blockId], value);
      removeFromeAxisX(state.answers, id, value);
      removeFromeAxisY(state.answers, id, value);

      const data = chekIfSolve(state, value);
      if (!state.isRedy) miniME(state, data.id, data.val);
    };
    miniME(state, id, value);
    return state;
  });
};
const removeFromeBlock = (state, value) => {
  state.map((x) => {
    const index = x.options.indexOf(value);
    const optionsNew = (x.options[index] = 0);
    return optionsNew;
  });
};

const chekIfSolve = (state, value) => {
  let val;
  const id = { blockId: undefined, numberId: undefined };
  state.answers.forEach((blocks, blockIndex) => {
    blocks.forEach((numbers, numberIndex) => {
      if (state.isRedy === false) return;
      const optionsfilterd = numbers.options.filter((x) => x !== 0);
      if (optionsfilterd.length === 1 && !numbers.chosen) {
        numbers.chosen = optionsfilterd[0];
        id.blockId = blockIndex;
        id.numberId = numberIndex;
        val = numbers.chosen;
        state.isRedy = false;
        console.log(`ok!`);
      }
    });
  });
  console.log(val, id);
  return { val, id };
};
const removeFromeAxisX = (state, id, value) => {
  let blockAxis;
  if (id.blockId >= 0 && id.blockId <= 2) blockAxis = [0, 1, 2];
  if (id.blockId >= 3 && id.blockId <= 5) blockAxis = [3, 4, 5];
  if (id.blockId >= 6 && id.blockId <= 8) blockAxis = [6, 7, 8];

  blockAxis.forEach((block) => {
    state[block].forEach((x, i) => {
      if (i <= 2 && id.numberId <= 2) {
        const index = x.options.indexOf(value);
        const optionsNew = (x.options[index] = 0);
        return optionsNew;
      }
      if (i >= 3 && id.numberId >= 3 && i <= 5 && id.numberId <= 5) {
        const index = x.options.indexOf(value);
        const optionsNew = (x.options[index] = 0);
        return optionsNew;
      }
      if (i >= 6 && id.numberId >= 6) {
        const index = x.options.indexOf(value);
        const optionsNew = (x.options[index] = 0);
        return optionsNew;
      }
    });
  });
  return state;
};

const removeFromeAxisY = (state, id, value) => {
  let blockAxis;
  if (id.blockId === 0) blockAxis = [0, 3, 6];
  if (id.blockId === 1) blockAxis = [1, 4, 7];
  if (id.blockId === 2) blockAxis = [2, 5, 8];
  if (id.blockId === 3) blockAxis = [3, 0, 6];
  if (id.blockId === 4) blockAxis = [4, 1, 7];
  if (id.blockId === 5) blockAxis = [5, 2, 8];
  if (id.blockId === 6) blockAxis = [6, 0, 3];
  if (id.blockId === 7) blockAxis = [7, 1, 4];
  if (id.blockId === 8) blockAxis = [8, 2, 5];
  blockAxis.forEach((block) =>
    state[block].forEach((x, i) => {
      if (
        (id.numberId === 0 || id.numberId === 3 || id.numberId === 6) &&
        (i === 0 || i === 3 || i === 6)
      ) {
        const index = x.options.indexOf(value);
        const optionsNew = (x.options[index] = 0);
        return optionsNew;
      }
      if (
        (id.numberId === 1 || id.numberId === 4 || id.numberId === 7) &&
        (i === 1 || i === 4 || i === 7)
      ) {
        const index = x.options.indexOf(value);
        const optionsNew = (x.options[index] = 0);
        return optionsNew;
      }
      if (
        (id.numberId === 2 || id.numberId === 5 || id.numberId === 8) &&
        (i === 2 || i === 5 || i === 8)
      ) {
        const index = x.options.indexOf(value);
        const optionsNew = (x.options[index] = 0);
        return optionsNew;
      }
    })
  );
};

/*
 {
  this.setState(notRedy);
  console.log(this.state.isRedy);
  while (!this.state.isRedy) {
    if (this.state.isRedy) return;
    console.log(`start`);
    this.setState((state) => {
      state.answers[id.blockId][id.numberId].chosen = value;

      return state;
    });
    this.setState(
      (state) =>
        (state.answers[id] = removeFromeBlock(state.answers[id.blockId], value))
    );
    this.setState((state) => removeFromeAxisX(state.answers, id, value));
    this.setState((state) => removeFromeAxisY(state.answers, id, value));

    this.setState((state) => chekIfSolve(state.answers));
    console.log(this.state.isRedy);
  }
};
*/

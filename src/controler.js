// import React from "react";

export const pick = function (id, value) {
  this.setState((state) => {
    state.isRedy = false;
    state.answers[id.blockId][id.numberId].chosen = value;
    calcClick(state, id, value);
    return state;
  });
};

const calcClick = (state, id, value) => {
  state.isRedy = true;
  removeFromeBlock(state.answers[id.blockId], value);
  removeFromeAxisX(state.answers, id, value);
  removeFromeAxisY(state.answers, id, value);
  const data = chekIfSolve(state);
  if (!state.isRedy) calcClick(state, data.id, data.val);
};

const removeFromeBlock = (state, value) =>
  state.forEach((number) => optionsNewCalc(number, value));

const chekIfSolve = (state) => {
  let val;
  const id = {};
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
      }
    });
  });

  return { val, id };
};
const removeFromeAxisX = (state, id, value) => {
  const blockAxis = [];
  if (id.blockId <= 2) blockAxis.push(0, 1, 2);
  if (id.blockId >= 3 && id.blockId <= 5) blockAxis.push(3, 4, 5);
  if (id.blockId >= 6) blockAxis.push(6, 7, 8);

  blockAxis.forEach((block) => {
    state[block].forEach((number, i) => {
      if (i <= 2 && id.numberId <= 2) {
        optionsNewCalc(number, value);
      }
      if (i >= 3 && id.numberId >= 3 && i <= 5 && id.numberId <= 5) {
        optionsNewCalc(number, value);
      }
      if (i >= 6 && id.numberId >= 6) {
        optionsNewCalc(number, value);
      }
    });
  });
  return state;
};

const optionsNewCalc = (number, value) => {
  const index = number.options.indexOf(value);
  const optionsNew = (number.options[index] = 0);
  return optionsNew;
};

const removeFromeAxisY = (state, id, value) => {
  let blockAxis;
  if (id.blockId % 3 === 0) blockAxis = [0, 3, 6];
  if (id.blockId % 3 === 1) blockAxis = [1, 4, 7];
  if (id.blockId % 3 === 2) blockAxis = [2, 5, 8];

  blockAxis.forEach((block) =>
    state[block].forEach((number, i) => {
      if (id.numberId % 3 === 0 && i % 3 === 0) {
        optionsNewCalc(number, value);
      }
      if (id.numberId % 3 === 1 && i % 3 === 1) {
        optionsNewCalc(number, value);
      }
      if (id.numberId % 3 === 2 && i % 3 === 2) {
        optionsNewCalc(number, value);
      }
    })
  );
};

export const preGame = () => {
  const arr = new Array(9).fill(new Array(9).fill([]));
  return arr.map((arrBig, iBig) =>
    arrBig.map(
      (_, iSmall) =>
        (arr[iBig][iSmall] = {
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          chosen: undefined,
        })
    )
  );
};
/*
 
*/

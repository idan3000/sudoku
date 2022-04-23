const calcNewOptions = (number, value) => {
  const index = number.options.indexOf(value);
  const optionsNew = (number.options[index] = 0);
  return optionsNew;
};

export const pick = function (id, value) {
  this.setState((state) => {
    state.isRedy = false;
    state.answers[id.blockId][id.numberId].chosen = value;
    evreChange(state, id, value);
    return state;
  });
};

const evreChange = (state, id, value) => {
  state.isRedy = true;
  removeFromeBlock(state.answers[id.blockId], value);
  removeFromeAxisX(state.answers, id, value);
  removeFromeAxisY(state.answers, id, value);
  const data = chekIfSolve(state);
  if (!state.isRedy) evreChange(state, data.id, data.val);
};

const removeFromeBlock = (state, value) =>
  state.forEach((number) => calcNewOptions(number, value));

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

const calcBlockAxisx = (blockId) => {
  if (blockId <= 2) return [0, 1, 2];
  if (blockId >= 3 && blockId <= 5) return [3, 4, 5];
  if (blockId >= 6) return [6, 7, 8];
};

const removeFromeAxisX = (state, id, value) => {
  const blockAxis = calcBlockAxisx(id.blockId);

  blockAxis.forEach((block) => {
    state[block].forEach((number, i) => {
      if (i <= 2 && id.numberId <= 2) {
        calcNewOptions(number, value);
      }
      if (i >= 3 && id.numberId >= 3 && i <= 5 && id.numberId <= 5) {
        calcNewOptions(number, value);
      }
      if (i >= 6 && id.numberId >= 6) {
        calcNewOptions(number, value);
      }
    });
  });
  return state;
};

const calcBlockAxisY = (blockId) => {
  if (blockId % 3 === 0) return [0, 3, 6];
  if (blockId % 3 === 1) return [1, 4, 7];
  if (blockId % 3 === 2) return [2, 5, 8];
};

const removeFromeAxisY = (state, id, value) => {
  const blockAxis = calcBlockAxisY(id.blockId);

  blockAxis.forEach((block) =>
    state[block].forEach((number, i) => {
      if (id.numberId % 3 === 0 && i % 3 === 0) {
        calcNewOptions(number, value);
      }
      if (id.numberId % 3 === 1 && i % 3 === 1) {
        calcNewOptions(number, value);
      }
      if (id.numberId % 3 === 2 && i % 3 === 2) {
        calcNewOptions(number, value);
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

import { initState } from '../initState';

export const coordsReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_COORDS_IN_ARRAY':
      // Определяю индекс инпута в общем массиве и записываю по этому индексу значение
      const indexOfElement = (payload.index === 0) ? (payload.numOfTab * 2 - 2) : (payload.numOfTab * 2 - 1);
      state[indexOfElement] = payload.coord;
      return state;
    default:
      return state;
  }
};

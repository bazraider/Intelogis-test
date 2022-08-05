import { initState } from '../initState';

export const pointsReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_ALL_POINTS':
      return payload;
    default:
      return state;
  }
};

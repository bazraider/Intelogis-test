import { combineReducers } from 'redux';
import { coordsReducer } from './coordsReducer';
import { pointsReducer } from './pointsReducer';

export const rootReducer = combineReducers({
  points: pointsReducer,
  coords: coordsReducer,
});

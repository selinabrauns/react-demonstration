import { createActions } from 'redux-actions';

//// Use as action creators in data layers
export const commonActions = createActions({
  GET_HOUSES: id => id,
  GET_HOUSES_SUCCESS: (houses, houseData) => ({ houses, houseData }),
  GET_HOUSES_FAILURE: err => err,

  GET_CHARACTERS: id => id,
  GET_CHARACTERS_SUCCESS: characters => characters,
});


//// Use in components
export const getHouses = dispatch => () =>
  dispatch(commonActions.getHouses());
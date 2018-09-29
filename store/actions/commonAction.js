import { createActions } from 'redux-actions';

//// Use as action creators in data layers
export const commonActions = createActions({
  GET_HOUSES: houseId => houseId,
  GET_HOUSES_SUCCESS: (houses, houseData) => ({ houses, houseData }),
  GET_HOUSES_FAILURE: err => err,

  GET_CHARACTERS: ids => ids,
  GET_CHARACTERS_SUCCESS: characters => characters,
  GET_CHARACTERS_FAILURE: err => err,
});


//// Use in components
export const getHouses = dispatch => houseId =>
  dispatch(commonActions.getHouses(houseId));

export const getCharacters = dispatch => () =>
  dispatch(commonActions.getCharacters());
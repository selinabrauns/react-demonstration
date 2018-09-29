import { takeEvery, select, call, put } from 'redux-saga/effects';
import { uniq, difference  } from 'lodash';
import { commonActions } from '../actions/commonAction';
import Api from '../../api/index';

const getId = urlString => {
  const arr = urlString.split('/');
  if (arr.length > 0) return arr[arr.length - 1];
  return null;
};

/**
 * @param {Object} action
 * @description gets all houses or a specific one if action.payload is an houseId
 */
function* getHouses(action) {
  try {
    const response = yield call(Api.get, `/houses/${action.payload ? action.payload : ''}`);
    if(!response.data.length) response.data = [response.data];
    const orderedData = response.data.reduce((prev, curr) => {
      const characters = ['founder', 'currentLord', 'heir'];
      const houseId = getId(curr.url);

      // create data structure for table to iterate quickly
      const houseObj = {
        id: houseId,
        name: curr.name,
        currentLord: getId(curr.currentLord),
        region: curr.region
      };
      prev.houses.push(houseObj);

      // create data structure for quick access in UI
      prev.houseData[houseId] = curr;

      // accumulate character ids for consecutive call
      characters.forEach(character => {
        if (curr[character] !== '') prev.characters.push(getId(curr[character]));
      });

      curr.swornMembers.length && curr.swornMembers.forEach(url => {
        if (url !== '') prev.characters.push(getId(url));
      });

      return prev;
    }, { houses: [], houseData: {}, characters: [] });

    yield put(commonActions.getCharacters(uniq(orderedData.characters)));
    yield put(commonActions.getHousesSuccess(orderedData.houses, orderedData.houseData));
  }
  catch(err) {
    yield put(commonActions.getHousesFailure(err));
  }
}


/**
 * @param action
 * @description Evaluates which character IDs have already been fetched, and fetches the missing IDs. Then transforms
 * all responses in a hashmap allowing to access the name of a character (property) through its ID (key).
 */
function* getCharacters(action) {
  try {
    const state = yield select();

    const fetchedIds = Object.keys(state.commonReducer.characterNames);
    const notFetchedIds = difference(action.payload, fetchedIds);

    const responses =  yield notFetchedIds.map(characterId => call(Api.get, `/characters/${characterId}`));

    // create data structure for quick access in UI
    const characterNames = responses.reduce((prev, curr) => {
      const getId = curr.data.url.split('/');
      prev[getId[getId.length - 1]] =  curr.data.name;
      return prev;
    }, {});

    // make sure that new calls do not overwrite already fetched data
    const allNames = { ...state.commonReducer.characterNames, ...characterNames };

    yield put(commonActions.getCharactersSuccess(allNames));
  }
  catch (err) {
    yield put(commonActions.getCharactersFailure());
  }
}

export default function* commonSaga() {
  yield takeEvery(commonActions.getHouses().type, getHouses)
  yield takeEvery(commonActions.getCharacters().type, getCharacters)
}
import { takeEvery, select, call, put } from 'redux-saga/effects';
import { commonActions } from '../actions/commonAction';
import Api from '../../api/index';

function* getHouses(action) {
  // const state = yield select();
  // console.log(action, state);
  try {
    const response = yield call(Api.get, `/houses${action.payload ? `/${action.payload}` : ''}`);
    const orderedData = response.data.reduce((prev, curr) => {
      const getId = curr.url.split('/');
      const getLord = curr.currentLord.split('/');

      // create data structure for table to iterate quickly
      const houseObj = {
        id: getId[getId.length - 1],
        name: curr.name,
        currentLord: getLord.length && getLord[getLord.length - 1],
        region: curr.region
      };
      prev.houses.push(houseObj);

      // create data structure for quick access in details view
      prev[ getId[getId.length - 1]] = curr;

      // accumulate character ids for consecutive calls
      if (getLord.length) prev.currentLords.push(getLord[getLord.length - 1]);

      return prev;
    }, { houses: [], currentLords: [], houseData: {} });

    yield put(commonActions.getCharacters());
    yield put(commonActions.getHousesSuccess(orderedData.houses, orderedData.houseData));
  }
  catch(err) {
    yield put(commonActions.getHousesFailure(err));
  }
}

function* getCharacters(action) {
  console.log('fired')
}

export default function* commonSaga() {
  yield takeEvery(commonActions.getHouses().type, getHouses)
  yield takeEvery(commonActions.getCharacters().type, getCharacters)
}
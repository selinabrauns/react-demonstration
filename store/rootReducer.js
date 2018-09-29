import { combineReducers } from 'redux';

import commonReducer from './reducers/commonReducer';

const rootReducer = combineReducers({
  commonReducer,
});

export default rootReducer;
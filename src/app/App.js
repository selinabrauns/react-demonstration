import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducer from '../../store/rootReducer';
import { rootSaga } from '../../store/rootSaga';
import Main from './Main';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
         <Route path="/" component={Main} />
        </Router>
      </Provider>
    </div>
  )
};

export default App;


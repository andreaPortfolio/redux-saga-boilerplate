import { routerMiddleware } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';

// Import the state interface and our combined reducers.
import {  rootReducer } from './applicationState';



export const history: History = createBrowserHistory();


  const composeEnhancers = composeWithDevTools({});

  const sagaMiddleware = createSagaMiddleware();



  export const store = createStore(
    rootReducer(history),
    composeEnhancers(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );

  sagaMiddleware.run(rootSaga);

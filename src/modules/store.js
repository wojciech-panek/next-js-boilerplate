import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware, { END } from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [];

  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  } else if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    const { persistState } = require('redux-devtools');
    const devtools = require('../shared/utils/devtools');

    const getDebugSessionKey = () => {
      const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
      return (matches && matches.length > 0) ? matches[1] : null;
    };

    Array.prototype.push.apply(enhancers, [
      devtools.Component.instrument(),
      persistState(getDebugSessionKey(), (state) => fromJS(state)),
    ]);
  }

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(
      applyMiddleware(...middlewares),
      ...enhancers,
    )
  );

  store.runSaga = () => {
    if (store.saga) {
      return;
    }
    store.saga = sagaMiddleware.run(rootSaga);
  };

  store.stopSaga = async () => {
    if (!store.saga) {
      return;
    }
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    store.runSaga();
    tasks(store.dispatch);
    await store.stopSaga();

    if (!isServer) {
      store.runSaga();
    }
  };

  store.runSaga();

  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development' && !window.__REDUX_DEVTOOLS_EXTENSION__) {
    const devtools = require('../shared/utils/devtools');
    devtools.appendToDOM(store);
  }

  return store;
}

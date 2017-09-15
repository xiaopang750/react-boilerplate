import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const configureStore = (initState) => {
  const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;

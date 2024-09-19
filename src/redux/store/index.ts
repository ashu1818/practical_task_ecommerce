import {applyMiddleware, createStore, Store} from 'redux';
import rootReducer, {RootState} from '../reducer/rootReducer';
import {thunk} from 'redux-thunk';

const store: Store<RootState> = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;

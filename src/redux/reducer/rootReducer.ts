import {combineReducers} from 'redux';
import getProductReducer, {ProductState} from './getProductReducer';

export interface RootState {
  products: any;
}

const rootReducer = combineReducers<RootState>({
  products: getProductReducer,
});

export default rootReducer;

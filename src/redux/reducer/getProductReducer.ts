import {PRODUCT_FAILED, PRODUCT_LOADING, PRODUCT_SUCCESS} from '../types';

export interface ProductState {
  isLoading: boolean;
  productData: Record<string, any>;
  error: string;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: ProductState = {
  isLoading: false,
  productData: [],
  error: '',
};

export default function getProductReducer(
  state = initialState,
  action: Action,
): any {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case PRODUCT_SUCCESS:
      console.log('reducer', action.payload);
      return {
        ...state,
        isLoading: false,
        productData: action.payload,
        error: '',
      };
    case PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        productData: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

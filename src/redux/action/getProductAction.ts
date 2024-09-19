import {getProductsAPI, ParamData} from '../../services/product';
import {PRODUCT_FAILED, PRODUCT_LOADING, PRODUCT_SUCCESS} from '../types';
import _ from 'lodash';

export const getProductAction = (paramData: ParamData): any => {
  return async (dispatch: any) => {
    dispatch({
      type: PRODUCT_LOADING,
    });

    try {
      const response: any = await getProductsAPI(paramData);
      console.log('responseaction', response);

      if (!_.isEmpty(response)) {
        dispatch({
          type: PRODUCT_SUCCESS,
          payload: response?.data,
        });
      } else {
        dispatch({
          type: PRODUCT_FAILED,
          payload: {
            error: 'Something went wrong please try again later!!!!',
          },
        });
      }
    } catch (error) {
      dispatch({
        type: PRODUCT_FAILED,
        payload: {
          error: 'Something went wrong please try again later!!!!',
        },
      });
    }
  };
};

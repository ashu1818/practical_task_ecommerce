import {isInternetConnected} from '../utils';
import {callAPI} from './api.service';

export interface ParamData {
  offset: number;
  limit: number;
  title: string;
}

const getProductsAPI = async (paramData: ParamData) => {
  let responseData = {};
  const isConnected = await isInternetConnected();
  if (isConnected) {
    const URL = `/products?offset=${paramData.offset}&limit=${paramData.limit}&title=${paramData.title}`;
    const response: any = await callAPI({
      apiURL: URL,
      method: 'GET',
    });

    responseData = response;
  }
  return responseData;
};

export {getProductsAPI};

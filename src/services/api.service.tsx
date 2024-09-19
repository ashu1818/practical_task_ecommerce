import axios from 'axios';

export const callAPI = async ({
  apiURL,
  method = 'GET',
}: {
  apiURL: string;
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH';
}) => {
  const BASE_URL = 'https://api.escuelajs.co/api/v1';
  const response = await axios({
    method,
    url: BASE_URL + apiURL,
  }).catch(err => {
    return null;
  });
  return response;
};

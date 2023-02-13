import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ApiResponse } from '../global/type';

//Sets header and API token
const headers = {
  'Content-Type': 'application/json',
  'x-access-token': process.env.REACT_APP_API_KEY,
}

//Utlity function to create request with header
const createRequestWithHeader = (url:string)=> {
  return {
    url,
    headers
  }
}

export const coinsAPI = createApi({
  reducerPath: 'coinsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinranking.com/v2' }),
  endpoints: (builder) => ({
    getAllCoins: builder.query<ApiResponse, string>({
      query: () => createRequestWithHeader(`/coins`),
    }),
  }),
})

export const {useGetAllCoinsQuery} = coinsAPI;
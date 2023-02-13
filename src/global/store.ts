import { configureStore } from '@reduxjs/toolkit'

import { coinsAPI } from '../services/coins'

// Initiate Store
export const store = configureStore({
  reducer: {
    [coinsAPI.reducerPath]: coinsAPI.reducer
  },

  //use middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinsAPI.middleware)
})
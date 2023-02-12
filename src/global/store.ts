import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { coinsAPI } from '../services/coins'

export const store = configureStore({
  reducer: {
    [coinsAPI.reducerPath]: coinsAPI.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinsAPI.middleware)
})
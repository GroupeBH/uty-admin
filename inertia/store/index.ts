import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users_slice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

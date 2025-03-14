import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    currentUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setUsers, setCurrentUser, setLoading, setError } = usersSlice.actions
export default usersSlice.reducer

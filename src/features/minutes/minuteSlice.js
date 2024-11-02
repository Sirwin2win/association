import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import minuteService from './minuteService'

const initialState = {
  minutes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new minute
export const createMinute = createAsyncThunk(
  'minutes/create',
  async (minuteData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken
      return await minuteService.createMinute(minuteData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user minutes
export const getMinutes = createAsyncThunk(
  'minutes/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken
      return await minuteService.getMinutes(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user minute
export const deleteMinute = createAsyncThunk(
  'minutes/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken
      return await minuteService.deleteMinute(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const minuteSlice = createSlice({
  name: 'minute',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMinute.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createMinute.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.minutes.push(action.payload)
      })
      .addCase(createMinute.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getMinutes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMinutes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.minutes = action.payload
      })
      .addCase(getMinutes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteMinute.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteMinute.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.minutes = state.minutes.filter(
          (minute) => minute._id !== action.payload.id
        )
      })
      .addCase(deleteMinute.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = minuteSlice.actions
export default minuteSlice.reducer

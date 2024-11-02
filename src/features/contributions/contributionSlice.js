import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import contributionService from './contributionService'

const initialState = {
  contributions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new contribution
export const createContribution = createAsyncThunk(
  'contributions/create',
  async (contributionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken
      return await contributionService.createContribution(contributionData, token)
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

// Get user contributions
export const getContributions = createAsyncThunk(
  'contributions/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken
      return await contributionService.getContributions(token)
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

// Delete usercontribution
export const deleteContribution = createAsyncThunk(
  'contributions/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken
      return await contributionService.deleteContribution(id, token)
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

export const contributionSlice = createSlice({
  name: 'contribution',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContribution.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createContribution.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contributions.push(action.payload)
      })
      .addCase(createContribution.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getContributions.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getContributions.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contributions = action.payload
      })
      .addCase(getContributions.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteContribution.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteContribution.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.contributions = state.contributions.filter(
          (contribution) => contribution._id !== action.payload.id
        )
      })
      .addCase(deleteContribution.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = contributionSlice.actions
export default contributionSlice.reducer

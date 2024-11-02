import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import complaintService from './complaintService'

const initialState = {
  complaints: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new complaint
export const createComplaint = createAsyncThunk(
  'complaints/create',
  async (complaintData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken
      return await complaintService.createComplaint(complaintData, token)
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

// Get user complaints
export const getComplaints = createAsyncThunk(
  'complaints/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken
      return await complaintService.getComplaints(token)
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

// Delete user complaint
export const deleteComplaint = createAsyncThunk(
  'complaints/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken
      return await complaintService.deleteComplaint(id, token)
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

export const complaintSlice = createSlice({
  name: 'complaint',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createComplaint.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createComplaint.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.complaints.push(action.payload)
      })
      .addCase(createComplaint.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getComplaints.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getComplaints.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.complaints = action.payload
      })
      .addCase(getComplaints.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteComplaint.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteComplaint.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.complaints = state.complaints.filter(
          (complaint) => complaint._id !== action.payload.id
        )
      })
      .addCase(deleteComplaint.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = complaintSlice.actions
export default complaintSlice.reducer

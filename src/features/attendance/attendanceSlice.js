import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  attendance: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new state
export const createAttendance = createAsyncThunk(
  'attendance/create',
  async (attendanceData , thunkAPI) => {
    try {
    //   const token = thunkAPI.getState().auth.user.token
    //   return await storeService.createStore(storeData, token)
    const res = await axios.post('https://assoback.onrender.com/attendance', attendanceData)
//   const res = await storeService.getStores()
     return res
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


// Get user stores
export const getAttendance = createAsyncThunk(
  'attendance/getAll',
  async (_, thunkAPI) => {
    try {
      const branchId = thunkAPI.getState().auth.user.branchId
    const res = await axios.get(`https://assoback.onrender.com/attendance/${branchId}`)
     return res.data
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
// Get user stores
// export const getBranchInfo = createAsyncThunk(
//   'branches/getAll',
//   async (_, thunkAPI) => {
//     try {
//       const branch = thunkAPI.getState().branches.branches.branch
//     const res = await axios.get(`http://localhost:5000/branches/${branch}`)
//      return res.data
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// Delete user store
// export const deleteStore = createAsyncThunk(
//   'stores/delete',
//   async (storeId:string, thunkAPI:any) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await storeService.deleteStore(storeId, token)
//     } catch (error:any) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

export const attendanceSlice = createSlice({
  name: 'attendant',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAttendance.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createAttendance.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.attendance.push(action.payload)
      })
      .addCase(createAttendance.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    //   .addCase(updateStore.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(updateStore.fulfilled, (state:any, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.stores.push(action.payload)
    //   })
    //   .addCase(updateStore.rejected, (state:any, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })
      .addCase(getAttendance.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAttendance.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.attendance = action.payload
      })
      .addCase(getAttendance.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    //   .addCase(deleteStore.pending, (state) => {
    //     state.isLoading = true
    //   })
    //   .addCase(deleteStore.fulfilled, (state, action) => {
    //     state.isLoading = false
    //     state.isSuccess = true
    //     state.stores = state.stores.filter(
    //       (store:any) => store.storeId !== action.payload.id
    //     )
    //   })
    //   .addCase(deleteStore.rejected, (state:any, action) => {
    //     state.isLoading = false
    //     state.isError = true
    //     state.message = action.payload
    //   })
  },
})

export const { reset } = attendanceSlice.actions
export default attendanceSlice.reducer

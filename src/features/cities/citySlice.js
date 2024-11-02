import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  cities: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new state
export const createCity = createAsyncThunk(
  'cities/create',
  async (cityData , thunkAPI) => {
    try {
    //   const token = thunkAPI.getState().auth.user.token
    //   return await storeService.createStore(storeData, token)
    const res = await axios.post('https://assoback.onrender.com/cities', cityData)
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

// Update new store
// export const updateStore:any = createAsyncThunk(
//   'stores/update',
//   async (storeData :any, thunkAPI:any) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       const storeId = thunkAPI.getState().stores.stores.id
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//       // return await storeService.updateStore(storeData, token)
//       return await axios.patch(`http://localhost:8000/stores/${storeId}`, storeData, config)
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

// Get user stores
// export const getStores:any = createAsyncThunk(
//   'stores/getAll',
//   async (_, thunkAPI:any) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await storeService.getStores(token)
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

// Get user stores
export const getCity = createAsyncThunk(
  'cities/getAll',
  async (_, thunkAPI) => {
    try {
    const res = await axios.get('https://assoback.onrender.com/cities')
    // const res = await axios.get('https://devapi.tailorspace.store/stores/ankara')
//   const res = await storeService.getStores()
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

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCity.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCity.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cities.push(action.payload)
      })
      .addCase(createCity.rejected, (state, action) => {
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
      .addCase(getCity.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCity.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cities = action.payload
      })
      .addCase(getCity.rejected, (state, action) => {
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

export const { reset } = citySlice.actions
export default citySlice.reducer

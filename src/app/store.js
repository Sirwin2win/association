import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import branchReducer from '../features/branches/branchSlice'
import minuteReducer from '../features/minutes/minuteSlice'
import complaintReducer from '../features/complaint/complaintSlice'
import contributionReducer from '../features/contributions/contributionSlice'
import  cityReducer  from '../features/cities/citySlice'
// import  branchReducer  from '../features/branches/branchSlice'



export const store = configureStore({
  reducer: {
    auth: authReducer,
    branches: branchReducer,
    minutes: minuteReducer,
    complaints: complaintReducer,
    contributions: contributionReducer,
cities:cityReducer,
// middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({serializableCheck:false}).concat(yourCustomMiddleWare),
  },
})

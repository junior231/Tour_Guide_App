import { configureStore } from '@reduxjs/toolkit';
import tourReducer from '../features/tourslice'

export default configureStore({
  reducer: {
      tourState: tourReducer
  }
})
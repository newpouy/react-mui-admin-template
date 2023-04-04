import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import messageReducer from './messageSlice'
import customizationReducer from './customizationReducer'

const reducer = {
  auth: authReducer,
  message: messageReducer,
  customization: customizationReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store

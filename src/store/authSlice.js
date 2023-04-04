import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setMessage } from './messageSlice'

import AuthService from 'service/auth.service'
import componentStyleOverrides from 'themes/compStyleOverride'

const token = localStorage.getItem('token')

export const register = createAsyncThunk('auth/register', async ({ username, email, password }, thunkAPI) => {
  try {
    const response = await AuthService.register(username, email, password)
    thunkAPI.dispatch(setMessage(response.data.message))
    return response.data
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    thunkAPI.dispatch(setMessage(message))
    return thunkAPI.rejectWithValue()
  }
})

export const loginAction = createAsyncThunk('auth/login', async ({ username, password }, thunkAPI) => {
  console.log('in loginAction', username, password)
  try {
    const data = await AuthService.login(username, password)
    return data.result
  } catch (error) {
    console.log(error, 'erro')
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    thunkAPI.dispatch(setMessage(message))
    return thunkAPI.rejectWithValue()
  }
})

export const logoutAction = createAsyncThunk('auth/logout', async () => {
  alert('remove token')
  localStorage.removeItem('token')
})

export const getMeInfoAction = createAsyncThunk('auth/me', async () => {
  console.log('getMeInfo')
  try {
    const response = await AuthService.getMeInfo()
    thunkAPI.dispatch(setMessage(response.data.message))
    return response.data
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    thunkAPI.dispatch(setMessage(message))
    return thunkAPI.rejectWithValue()
  }
})

const initialState = {
  token: null,
  isLoggedIn: token ? true : false,
  admin: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false
    },
    [loginAction.fulfilled]: (state, action) => {
      console.log(state, action, 'in fulfiled')
      state.isLoggedIn = true
      state.token = action.payload.access_token
      localStorage.setItem('token', action.payload.access_token)
      location.href = '/'
    },
    [loginAction.rejected]: (state, action) => {
      console.log(' rejected ')
      state.isLoggedIn = false
      state.admin = null
    },
    [logoutAction.fulfilled]: (state, action) => {
      state.isLoggedIn = false
      state.admin = null
    },
    [getMeInfoAction.fulfilled]: (state, action) => {
      console.log(state, action, 'in getMeInfoAction fulfiled')
      state.admin = action.payload
    },
    [getMeInfoAction.rejected]: (state, action) => {
      console.log(' getMeInfoAction rejected ')
      state.isLoggedIn = false
      state.admin = null
    },
  },
})

const { reducer } = authSlice
export default reducer

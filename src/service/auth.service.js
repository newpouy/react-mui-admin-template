import http from './http'
import axios from 'axios'
console.log(process.env, 'ndndndnn')
const API_URL = process.env.REACT_APP_API_URL

const register = (username, email, password) => {
  return axios.post('signup', {
    username,
    email,
    password,
  })
}

const login = async (username, password) => {
  console.log('in login servie', http, API_URL)
  return http
    .post(`auth/admin/login`, {
      email: username,
      password,
    })
    .then((response) => {
      console.log(response, 'resss')
      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getMeInfo = () => {
  return http.get(`auth/admin/me`).then((response) => {
    console.log(response, 'resss')
    return response.data
  })
}
const authService = {
  register,
  login,
  logout,
  getMeInfo,
}

export default authService

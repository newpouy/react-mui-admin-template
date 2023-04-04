import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [
    (data) => {
      return JSON.stringify(data)
    },
  ],
  transformResponse: [
    (data) => {
      return JSON.parse(data)
    },
  ],
})

const token = localStorage.getItem('token')
api.defaults.headers.common['Authorization'] = `Bearer ${token}`

api.interceptors.request.use((request) => {
  console.log('in request interceptor', request)
  return request
})

const responserHandler = (response) => {
  console.log('in response interceptor', response)
  return response
}

const errorHandler = (error) => {
  console.log('in error handle')
}
api.interceptors.response.use(responserHandler, errorHandler)

export default api

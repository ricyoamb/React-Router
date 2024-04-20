import axios from 'axios'

// Set up Axios instance
const instance = axios.create({
  baseURL: 'http://localhost:8000',
})

// Add interceptor to automatically add authorization header
instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export { instance }

import axios from "axios"


const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('API Error:', error)
    return Promise.reject(error)
  }
)

export default instance
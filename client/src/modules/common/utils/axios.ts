import axios from 'axios'
import { ENVIRONMENT } from './environment'

const BASE_URL = ENVIRONMENT.VITE_API_BASE_URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

export default axiosInstance

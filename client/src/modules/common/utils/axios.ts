import axios from 'axios'
import { ENVIRONMENT } from './environment'

const baseUrl = ENVIRONMENT.VITE_API_BASE_URL

export const axiosInstance = axios.create({
  baseURL: baseUrl,
})

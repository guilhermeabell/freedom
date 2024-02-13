import { formatProducts } from './formatProducts'
import { Product } from '@/modules/common/types'
import { axiosInstance } from './axios'
import { AxiosResponse } from 'axios'

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse = await axiosInstance.get('/products')
    return formatProducts(response.data)
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    return []
  }
}

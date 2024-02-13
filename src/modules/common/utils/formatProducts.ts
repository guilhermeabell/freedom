import { Product } from '@/schemas/types/product'

interface RawProduct {
  selectedProduct: string
  name: string
  product: {
    image: string
  }
}

export const formatProducts = (data: { products: RawProduct[] }): Product[] => {
  return data.products.map((product: RawProduct) => ({
    id: product.selectedProduct,
    name: product.name,
    image: product.product.image,
  }))
}

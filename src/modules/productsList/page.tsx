import { useEffect } from 'react'
import { useAppStore } from '../app/api/app.store'
import { ProductCard } from '../app/components/ProductCard'
import { fetchProducts } from '../common/utils/fetcher'

export default function ProductsList() {
  const { products, listProducts } = useAppStore()

  useEffect(() => {
    const loadProducts = async () => {
      const formattedProducts = await fetchProducts()
      listProducts(formattedProducts)
    }

    loadProducts()
  }, [listProducts])

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

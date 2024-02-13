import { useEffect } from 'react'
import { useAppStore } from '@/modules/app/api/app.store'
import { ProductCard } from '@/modules/app/components/ProductCard'
import { fetchProducts } from '@/modules/common/utils/fetcher'

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

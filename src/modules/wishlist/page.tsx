import { useEffect } from 'react'
import { useAppStore } from '../app/api/app.store'
import { ProductCard } from '../app/components/ProductCard'
import { fetchProducts } from '../common/utils/fetcher'

export default function Wishlist() {
  const { products, wishlist, listProducts } = useAppStore()

  useEffect(() => {
    const loadProducts = async () => {
      if (products.length === 0) {
        const formattedProducts = await fetchProducts()
        listProducts(formattedProducts)
      }
    }

    loadProducts()
  }, [listProducts, products.length])

  const wishlistProducts = products.filter((product) => wishlist.includes(product.id))

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {wishlistProducts.map((product, index) => (
        <ProductCard key={index} product={product} isWishlist={wishlist.includes(product.id)} />
      ))}
    </div>
  )
}

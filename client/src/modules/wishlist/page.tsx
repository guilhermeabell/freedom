import { useEffect } from 'react'
import { useAppStore } from '@/modules/app/api/app.store'
import { ProductCard } from '@/modules/app/components/ProductCard'
import { fetchProducts } from '@/modules/common/utils/fetcher'
import { Heart } from 'lucide-react'

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
      {wishlistProducts.length > 0 ? (
        wishlistProducts.map((product, index) => <ProductCard key={index} product={product} isWishlist />)
      ) : (
        <div className="mx-auto mt-40 flex flex-col items-center justify-center gap-5 py-8">
          <div className="flex items-center">
            <Heart size={40} />
          </div>
          <p className="text-xs font-semibold text-nowrap flex items-center justify-center text-gray-500 text-center">
            Você ainda não possui itens salvos na <br />
            sua Lista de Desejos.
          </p>
        </div>
      )}
    </div>
  )
}

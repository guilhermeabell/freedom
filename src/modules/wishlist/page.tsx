import { useAppStore } from '../app/api/app.store'
import { ProductCard } from '../app/components/ProductCard'

export default function Wishlist() {
  const { products, wishlist } = useAppStore()

  const wishlistProducts = products.filter((product) => wishlist.includes(product.id))

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {wishlistProducts.map((product, index) => (
        <ProductCard key={index} product={product} isWishlist={wishlist.includes(product.id)} />
      ))}
    </div>
  )
}

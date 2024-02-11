import { ProductCard } from '../app/components/ProductCard'

export default function wishlist() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <ProductCard isWishlistItem />
      <ProductCard isWishlistItem />
      <ProductCard isWishlistItem />
      <ProductCard isWishlistItem />
    </div>
  )
}

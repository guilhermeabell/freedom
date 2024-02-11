import { Heart, X } from 'lucide-react'
import { useAppStore } from '../../api/app.store'
import { useSnackStore } from '../../../common/api/snackbar.store'
import { Product } from '../../../common/types/index'

interface ProductCardProps {
  product: Product
  isWishlist?: boolean
}

export function ProductCard({ product, isWishlist }: Readonly<ProductCardProps>) {
  const { addToWishlist, removeFromWishlist, wishlist } = useAppStore()
  const { showMessage } = useSnackStore()

  const isProductInWishlist = wishlist.includes(product.id)

  const handleToggleWishlist = () => {
    const action = isProductInWishlist ? removeFromWishlist : addToWishlist
    action(product.id)
    const productName = product.name
    const actionMessage = isProductInWishlist ? `${productName} was removed from the wishlist` : `${productName} was added to the wishlist`
    showMessage({ severity: 'success', message: actionMessage })
  }

  return (
    <div className="w-72 h-97 bg-brand-white rounded-lg shadow-md flex flex-col overflow-hidden relative">
      <img
        src={product.image}
        alt="Imagem do produto"
        className="w-full h-3/5 object-cover rounded-t-lg transition-opacity duration-300 hover:opacity-80"
      />
      {isWishlist ? (
        <button
          className="absolute top-4 right-4 bg-transparent text-gray-600 hover:text-gray-300 focus:outline-none"
          onClick={handleToggleWishlist}
        >
          <X />
        </button>
      ) : (
        <button
          onClick={handleToggleWishlist}
          className="absolute top-4 right-4 bg-transparent text-gray-600 hover:text-red-500 focus:outline-none"
        >
          {isProductInWishlist ? <Heart size={24} fill="#FF0000" /> : <Heart size={24} />}
        </button>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-lg font-bold text-brand-purple">{product.name}</div>
        <div className="flex items-center mb-2 gap-1">
          <span className="text-brand-yellow">&#9733;</span>
          <span className="text-brand-yellow">&#9733;</span>
          <span className="text-brand-yellow">&#9733;</span>
          <span className="text-brand-yellow">&#9733;</span>
          <span className="text-brand-yellow">&#9733;</span>
          5.0
        </div>
        <div className="text-sm text-gray-500 line-through mb-1">R$209,90</div>
        <div className="text-lg font-bold text-brand-purple">R$150,00</div>
      </div>
    </div>
  )
}

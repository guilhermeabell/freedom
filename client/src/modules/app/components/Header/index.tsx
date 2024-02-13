import { Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  const handleNavigateToWishlist = () => {
    navigate('/wishlist')
  }

  const handleNavigateToHome = () => {
    navigate('/')
  }

  return (
    <header className="bg-brand-purple w-full h-16 z-50 shadow-md fixed top-0 left-0">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center py-3">
          <a onClick={handleNavigateToHome} className="cursor-pointer">
            <img src="https://static.netshoes.com.br/2.89.4/netshoesbr/images/logo.png" alt="Netshoes" className="w-auto" />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handleNavigateToWishlist} className="text-brand-white font-semibold flex justify-between gap-2">
            <Heart />
            Wishlist
          </button>
        </div>
      </div>
    </header>
  )
}

import { Heart } from 'lucide-react'

export function ProductCard() {
  return (
    <div className="w-72 h-97 bg-brand-white rounded-lg shadow-md flex flex-col overflow-hidden relative">
      <img
        src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
        alt="Imagem do produto"
        className="w-full h-3/5 object-cover rounded-t-lg transition-opacity duration-300 hover:opacity-80"
      />
      <button className="absolute top-4 right-4 bg-transparent text-gray-600 hover:text-red-500 focus:outline-none">
        <Heart />
      </button>
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-lg font-bold text-brand-purple">Tenis Adidas Breaknet Feminino</div>
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

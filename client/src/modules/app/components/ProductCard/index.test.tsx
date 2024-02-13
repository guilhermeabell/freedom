import { render, screen } from '@testing-library/react'
import { ProductCard } from '@/modules/app/components/ProductCard'

describe('ProductCard', () => {
  const product = {
    id: 'DFN-KSJDS-1324',
    name: 'Product Name',
    image: 'https://example.com/product-image.jpg',
  }

  it('renders product name and image correctly', () => {
    render(<ProductCard product={product} />)
    expect(screen.getByAltText('Imagem do produto')).toBeInTheDocument()
    expect(screen.getByText('Product Name')).toBeInTheDocument()
  })
})

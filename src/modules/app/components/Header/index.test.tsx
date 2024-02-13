import { render, screen } from '@testing-library/react'
import { Header } from './index'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}))

describe('Header', () => {
  it('renders header correctly', () => {
    render(<Header />)

    expect(screen.getByAltText('Netshoes')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /wishlist/i })).toBeInTheDocument()
  })
})

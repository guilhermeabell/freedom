import { createSelectors } from '../../common/utils/createSelectors'
import create from 'zustand'

interface Product {
  id: string
  name: string
  image: string
}

interface StoreState {
  products: Product[]
  wishlist: string[]
  addToWishlist: (productId: string) => void
  listProducts: (products: Product[]) => void
  removeFromWishlist: (productId: string) => void
}

const useStore = create<StoreState>((set) => {
  const initialWishlist = JSON.parse(localStorage.getItem('wishlist') ?? '[]')

  return {
    products: [],
    wishlist: initialWishlist,

    listProducts: (products) => set({ products }),

    addToWishlist: (productId) =>
      set((state) => {
        const updatedWishlist = [...state.wishlist, productId]
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
        return { wishlist: updatedWishlist }
      }),

    removeFromWishlist: (productId) =>
      set((state) => {
        const updatedWishlist = state.wishlist.filter((id) => id !== productId)
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
        return { wishlist: updatedWishlist }
      }),
  }
})

export const useAppStore = createSelectors(useStore)

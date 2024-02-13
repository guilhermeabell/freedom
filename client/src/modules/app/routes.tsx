import { RouteObject } from 'react-router-dom'
import { DefaultLayout } from '@/modules/app/components/DefaultLayout'
import productsList from '@/modules/productsList/route'
import wishlist from '@/modules/wishlist/route'

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: DefaultLayout,
    errorElement: <h1>Erro inesperado. Recarregue a página e tente novamente ou entre em contato com o suporte.</h1>,
    children: [productsList, wishlist],
  },
]

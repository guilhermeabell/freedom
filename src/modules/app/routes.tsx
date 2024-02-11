import { RouteObject } from 'react-router-dom'
import { DefaultLayout } from './components/DefaultLayout'
import productsList from '../productsList/route'
import wishlist from '../wishlist/route'

export const routes: RouteObject[] = [

  {
    path: '/',
    Component: DefaultLayout,
    errorElement: (
      <h1>Erro inesperado. Recarregue a página e tente novamente ou entre em contato com o suporte.</h1>
    ),
    children: [productsList, wishlist],
  },
]
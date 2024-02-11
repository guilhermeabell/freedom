import { Suspense, lazy } from 'react'
import { RouteObject } from 'react-router-dom'

// eslint-disable-next-line react-refresh/only-export-components
const PageComponent = lazy(() => import('./page'))

const route: RouteObject = {
  index: true,
  Component: () => (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <PageComponent />
    </Suspense>
  ),
}

export default route

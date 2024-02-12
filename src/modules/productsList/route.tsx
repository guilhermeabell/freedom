import { Suspense, lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { ProductCardSkeleton } from '../app/components/ProductCard/skeleton'

const PageComponent = lazy(() => import('./page'))

const route: RouteObject = {
  index: true,
  Component: () => (
    <Suspense
      fallback={
        <div className="flex flex-wrap justify-center gap-4 p-4">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
      }
    >
      <PageComponent />
    </Suspense>
  ),
}

export default route

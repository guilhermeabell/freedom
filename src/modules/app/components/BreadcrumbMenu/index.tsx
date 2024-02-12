import { ApiRoutes, HOME_ROUTE } from '../../../common/api/routes'
import { useLocation, Link } from 'react-router-dom'

const breadcrumbMapping: Record<string, string> = {
  [HOME_ROUTE]: 'Home',
  [ApiRoutes.PRODUCTS_LIST]: 'Home',
  [ApiRoutes.WISHLIST]: 'Home/Wishlist',
}

export function BreadcrumbMenu() {
  const location = useLocation()
  const pathnameWithoutSlash = location.pathname.replace('/', '')

  const breadcrumbPath = breadcrumbMapping[pathnameWithoutSlash] || breadcrumbMapping[HOME_ROUTE]

  return (
    <div className="mx-auto px-1 py-8">
      <div className="text-sm text-brand-purple font-bold">
        {pathnameWithoutSlash === ApiRoutes.WISHLIST ? <Link to={HOME_ROUTE}>{breadcrumbPath}</Link> : breadcrumbPath}
      </div>
    </div>
  )
}

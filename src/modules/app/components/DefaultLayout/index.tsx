import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { BreadcrumbMenu } from '../BreadcrumbMenu'

export function DefaultLayout() {
  return (
    <div className='mx-auto'>
      <Header />
      <div className="mt-4">
        <div className="container mx-auto px-4 py-2 border-b-2 border-brand-lightGray">
          <BreadcrumbMenu />
        </div>
      </div>
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-center items-center h-96">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

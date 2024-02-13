import { Outlet } from 'react-router-dom'
import { Header } from '@/modules/app/components/Header'
import { BreadcrumbMenu } from '@/modules/app/components/BreadcrumbMenu'

export function DefaultLayout() {
  return (
    <div className="mx-auto">
      <Header />
      <div className="mt-10">
        <div className="container mx-auto h-20 px-4 pt-2 border-b-2 border-brand-lightGray">
          <BreadcrumbMenu />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

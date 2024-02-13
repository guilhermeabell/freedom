import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { AppProviders } from '@/modules/common/components/AppProviders'

export function App() {
  return (
    <>
      <AppProviders />
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  )
}

export default App

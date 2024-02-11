import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const api = import.meta.env.VITE_API_BASE_URL

console.log(api)

export function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

export default App

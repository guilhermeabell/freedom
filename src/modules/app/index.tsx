import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const apiUrl = import.meta.env.VITE_API_BASE_URL

console.log('API URL:', apiUrl)

export function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

export default App

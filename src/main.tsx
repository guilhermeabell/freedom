import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/app/index'
import './index.css'

const apiUrl = import.meta.env.VITE_API_BASE_URL

console.log('API URL:', apiUrl)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

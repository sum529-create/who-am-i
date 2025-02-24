// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "./styles/theme.css"

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  // </StrictMode>
)

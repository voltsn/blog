import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router' 

// Import generated route tree
import { routeTree } from './routeTree.gen.ts'
import './style.css'

// Create router instance
const router = createRouter({ routeTree });

// Register router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

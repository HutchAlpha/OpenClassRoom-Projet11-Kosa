import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../public/Scss/Index.scss'
import App from './App.jsx'
import Index from './Index.jsx'
import Apropos from './Apropos.jsx'
import Detail from './Detail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/apropos',
        element: <Apropos />,
      },
      {
        
        path: '/{item.id}/detail',
        element: <Detail />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

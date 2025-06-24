import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'antd/dist/reset.css'; // for AntD v5+

import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import { Toaster } from 'react-hot-toast';



createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
         <Toaster position="top-right" reverseOrder={false} />
  </StrictMode>,
)

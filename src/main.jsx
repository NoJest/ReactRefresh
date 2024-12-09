import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AllLandlords from './components/AllLandlords.jsx'
import LandlordForm from './components/LandlordForm.jsx'

const routes = [
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index:true,
        element:<AllLandlords />
      },
      {
        path: "add-new-landlord",
        element: <LandlordForm />
      }
    ]
  },

]

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />
 
)

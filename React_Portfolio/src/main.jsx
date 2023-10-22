import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Resume from './components/Resume.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        {
    path: '/',
    element: <About />
  },
  {
    path: '/',
    element: <Contact />
  },
  {
    path: '/',
    element: <Resume />
  }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

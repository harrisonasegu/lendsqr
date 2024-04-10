import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import App from './App.tsx'
import Login from './pages/login.tsx'
import User from './pages/user.tsx'
import Dashboard from './pages/dashboard.tsx'
import './index.css'

const router = createBrowserRouter([
 {
  path: '/',
  element: <Login /> 
 },
 {
  path: '/dashboard',
  element: <Dashboard /> 
},
{
  path: '/user',
  element: <User /> 
},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

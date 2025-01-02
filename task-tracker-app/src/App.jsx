import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import PageNotFound from './components/ErrorPage/PageNotFound';
import NavBar from './components/NavBar/NavBar';

const routes = createBrowserRouter([
  { path: "/", element: <Login />, errorElement: <PageNotFound /> },
  // { path: "/navbar", element: <NavBar /> },
  // { path: "/dashboard", element: <Dashboard /> }
  {
    path: "navbar", element: <NavBar />, children: [
      { path: "dashboard", element: <Dashboard /> }
    ]
  }

]

)
const App = () => {
  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  )
}

export default App

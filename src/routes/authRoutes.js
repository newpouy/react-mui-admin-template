/* eslint-disable no-unused-vars */

import MinimalLayout from 'layout/MinimalLayout'
import Login from 'views/Login'
import Register from 'views/Register'

const authRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ],
}

export default authRoutes

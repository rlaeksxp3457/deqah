import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login.tsx';
import AuthBase from './pages/AuthBase/AuthBase.tsx';
import SignUp from './pages/SignUp/SignUp.tsx';
import SelectRole from './pages/SelectRole/SelectRole.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>sorry, not found 404</div>,
  },
  {
    path: '/auth',
    element: <AuthBase />,
    errorElement: <div>sorry, not found 404</div>,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
  {
    path: '/select-role',
    element: <SelectRole />,
    errorElement: <div>sorry, not found 404</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

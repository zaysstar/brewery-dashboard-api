import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import your global styles
import './App.css'; 

// Import your page/layout components
import Layout from './Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import BreweryDetail from './pages/BreweryDetail.jsx';

// --- Define Your Routes ---
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/', 
        element: <Dashboard />,
      },
      {
        path: '/brewery/:id', // <-- ADD THIS ROUTE
        element: <BreweryDetail />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
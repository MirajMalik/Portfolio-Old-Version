import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/home/Home';
import About from './components/about/About';
import App from './App';
// import AuthLayout from './components/auth/AuthLayout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { 
        path: "about", 
        loader: async () => {                                         // the loaders are called before the route component is rendered.   
            const res =  await fetch('../about.json');
            return res.json();         
        },
        Component: About,
      },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

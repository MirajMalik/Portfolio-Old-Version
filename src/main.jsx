import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/home/Home';
import About from './components/about/About';
import App from './App';
// import AuthLayout from './components/auth/AuthLayout';
// import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Projects from './components/projects/Projects';

const projectsPromise = fetch("https://api.github.com/users/MirajMalik/repos")
                        .then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { 
        index: true, 
         loader: async () => {                                         // the loaders are called before the route component is rendered.   
            const res =  await fetch('../about.json');
            return res.json();         
        },
        Component: Home 
      },
      { 
        path: "about", 
        loader: async () => {                                         // the loaders are called before the route component is rendered.   
            const res =  await fetch('../about.json');
            return res.json();         
        },
        Component: About,
      },
      { 
        path: "projects", 
        element: <Suspense fallback={ <span className='text-white flex justify-center items-center'>Loading....</span> }>
                    <Projects projectsPromise= {projectsPromise}/>
                 </Suspense> 
      },
      { path: "register", Component: Register },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

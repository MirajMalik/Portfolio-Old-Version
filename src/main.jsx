import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/home/Home';
import App from './App';
import Projects from './components/projects/Projects';
import ErrorPage from './components/Error/ErrorPage';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';



const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { 
        index: true, 
         loader: async () => {                                         // the loaders are called before the route component is rendered.   
            const res =  await fetch(`${import.meta.env.BASE_URL}about.json`);
            return res.json();         
        },
        Component: Home 
      },
      { 
        path: "resume", 
        loader: async () => {                                         // the loaders are called before the route component is rendered.   
            const res =  await fetch(`${import.meta.env.BASE_URL}about.json`);
            return res.json();         
        },
        Component: Resume,
      },
      { 
        path: "projects", 
        Component: Projects
      },
      { 
        path: "blog", 
        loader: async () => {
            const res = await fetch(`${import.meta.env.BASE_URL}blogs.json`);
            return res.json();
        },
        Component: Blog 
      },
      { 
        path: "blog/:id", 
        loader: async () => {
            const res = await fetch(`${import.meta.env.BASE_URL}blogs.json`);
            return res.json();
        },
        Component: BlogPost 
      },
      { path: "contact", Component: Contact },
    ],
  },

  { path: "*", Component: ErrorPage },

],
  {
     basename: '/Miraj_Portfolio',
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

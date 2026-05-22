import { StrictMode, Suspense } from 'react'
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
        path: "resume", 
        loader: async () => {                                         // the loaders are called before the route component is rendered.   
            const res =  await fetch('../about.json');
            return res.json();         
        },
        Component: Resume,
      },
      { 
        path: "projects", 
        element: <Suspense fallback={ <span className='text-white flex justify-center items-center'>Loading....</span> }>
                    <Projects projectsPromise= {projectsPromise}/>
                 </Suspense> 
      },
      { 
        path: "blog", 
        loader: async () => {
            const res = await fetch('../blogs.json');
            return res.json();
        },
        Component: Blog 
      },
      { 
        path: "blog/:id", 
        loader: async () => {
            const res = await fetch('../blogs.json');
            return res.json();
        },
        Component: BlogPost 
      },
      { path: "contact", Component: Contact },
    ],
  },

  { path: "*", Component: ErrorPage },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

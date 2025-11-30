import { useState } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import { RouterProvider } from 'react-router-dom'
import OnBoarding from './pages/OnBoarding'
import JobListing from './pages/JobListing';
import JobPage from './pages/JobPage';
import PostJob from './pages/PostJob';
import SavedJobs from './pages/SavedJobs';
import MyJobs from './pages/MyJobs';
import { ThemeProvider } from './components/ui/ThemeProvider'
import "./app.css"

function App() {

const router   = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path : "/onboarding",
        element:<OnBoarding/>
      },
      {
        path: "/jobs",
        element:<JobListing/>
      },
      {
        path: "/job/:id",
        element: <JobPage/>
      },
       {
        path: "/post-job",
        element: <PostJob/>
      },
       {
        path: "/saved-job",
        element: <SavedJobs/>
      },
       {
        path: "/my-jobs",
        element: <MyJobs/>
      }
    ]
  }
])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
     
      <RouterProvider router={router}/>
  </ThemeProvider>
  )
}

export default App

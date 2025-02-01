import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,children: [
        {
          path: "/",
          element: <Home />,
        },
      ]
    },
  ]);


  return (
    <>

    
    <RouterProvider router={router} />
    
    </>
  )
}

export default App

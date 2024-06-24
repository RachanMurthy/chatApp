import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './routes/layout/layout';
import RegisterPage from "./routes/registerPage/registerPage"
import LoginPage from './routes/loginPage/loginPage';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/register",
          element:<RegisterPage/>
        },
        {
          path:"/login",
          element:<LoginPage/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App

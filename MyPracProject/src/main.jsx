import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { AuthLayout} from './components/import.js'
import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'
import { AllPosts } from './pages/AllPosts.jsx'
import { AddPost } from './pages/AddPost.jsx'
import { Post } from './pages/Post.jsx'
import { EditPost } from './pages/EditPost.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login', 
        element: (  //() kyonki we use it as a wrapper jiske andar we can have multiple-children
          <AuthLayout authentication={false}> //taki auth ki condition check ho jaye
            <Login />
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout> //authentication false because signup and login page dono pe user authenticated nahi hota
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication> //by default true hota hai authentication prop ka value
            {" "}
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        )
      }, 
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        )
      }, 
      {
        path: '/post/:slug',
        element: <Post />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)

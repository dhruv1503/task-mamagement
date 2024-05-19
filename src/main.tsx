import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Overview } from './pages/overview/Overview.tsx'
import { Project } from './pages/project/Project.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

const router = createBrowserRouter([{
  path : "/",
  element : <Overview/>
},
{
  path : "/project/:projectName",
  element : <Project />
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)

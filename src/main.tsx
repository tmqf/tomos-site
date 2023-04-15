import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import './index.css'

import App from './App'
import Layout from "./Layout";
import Languages from "./routes/languages/Languages";
import Games from "./routes/games/Games";
import Extras from "./routes/extras/Extras";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "languages",
                element: <Languages/>

            },
            {
                path: "games",
                element: <Games/>

            },
            {
                path: "extras",
                element: <Extras/>

            },

        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App.tsx"
import "./index.css"

import { Home } from "./pages/home/Home.tsx";
import { MiniNoticias } from "./components/MiniNoticias/MiniNoticias.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/noticia/:id/:title",
        element: <MiniNoticias />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

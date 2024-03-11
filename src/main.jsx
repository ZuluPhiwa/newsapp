import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Entertainment from "./components/Entertainment.jsx";
import Home from "./components/Home.jsx";
import Sports from "./components/Sports.jsx";

const router = createBrowserRouter([
  {
    path: "/newsapp/",
    element: <App />,
    children: [
      {
        path: "/newsapp/",
        element: <Home />,
      },

      {
        path: "/newsapp/sports",
        element: <Sports />,
      },
      {
        path: "/newsapp/entertainment",
        element: <Entertainment />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

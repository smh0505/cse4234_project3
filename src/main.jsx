import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Index from "./index.jsx";
import Products from "./products.jsx";
import Team from "./team.jsx";
import Customers from "./customers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

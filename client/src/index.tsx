import "../tailwind.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Play = () => {
  return <div className="text-red-500 [color:green]"> Hello world </div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Play />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

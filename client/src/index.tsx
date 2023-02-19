import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import App from "./App";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const Play = () => {
  
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Play />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

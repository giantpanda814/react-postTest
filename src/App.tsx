import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Posts from "./pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

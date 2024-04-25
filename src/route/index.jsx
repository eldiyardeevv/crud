import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Create from "../components/Create";
import Posts from "../components/Posts";
import HomeLayout from "../layout/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
    ],
  },
]);

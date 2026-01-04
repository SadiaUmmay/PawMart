import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider.jsx";

import Root from "./Root/Root.jsx";
import Home from "./Page/Home.jsx";
import Services from "./Page/Services.jsx";
import Login from "./Page/Login.jsx";
import Register from "./Page/Register.jsx";

import PrivateRoute from "./Provider/PrivateRoute.jsx";
import Profile from "./Page/Profile.jsx";
import Servicedetails from "./Page/Servicedetails.jsx";
import AddListing from "./Page/AddListing.jsx";
import Myservice from "./Page/Myservice.jsx";
import Myorder from "./Page/Myorder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        element: (
         
            <Servicedetails />
         
        ),
      },
      {
        path: "/servicedetails/:id",
        element: (
         
            <Servicedetails />
         
        ),
      },
      {
        path: "/servicedetails",
        element: (
        
            <Servicedetails />
          
        ),
      },
      {
        path: "/addlisting",
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/mylistings",
        element: (
          <PrivateRoute>
            <Myservice />
          </PrivateRoute>
        ),
      },
      {
        path: "/myorder",
        element: (
          <PrivateRoute>
            <Myorder />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

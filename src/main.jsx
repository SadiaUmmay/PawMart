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
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/services", element: <Services></Services> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Register></Register> },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <Servicedetails />
          </PrivateRoute>
        ),
      },
      {
        
        path: "/servicedetails/:id",
        element: (
          <PrivateRoute>
            <Servicedetails />
          </PrivateRoute>
        ),
      },
      {
        
        path: "/servicedetails",
        element: (
          <PrivateRoute>
            <Servicedetails></Servicedetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/addlisting",
        element: (
          <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/mylistings",
        element: (
          <PrivateRoute>
            <Myservice></Myservice>
          </PrivateRoute>
        ),
      },
      {
        path: "/myorder",
        element: (
          <PrivateRoute>
            <Myorder></Myorder>
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

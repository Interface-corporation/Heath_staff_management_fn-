import React from "react";
import "./App.css";
import About from "./pages/landing/About";
import Contact from "./pages/landing/Contact";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/landing/Login";
import Register from "./pages/landing/Register";
import Services from "./pages/landing/Services";
import ApplyPage from "./pages/landing/ApplyPage";
import GuestLayout from "./components/layout/GuestLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { path: "/LandingPage", element: <LandingPage /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "ApplyPage", element: <ApplyPage /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

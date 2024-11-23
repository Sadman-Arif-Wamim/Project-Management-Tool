import { createBrowserRouter, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { SignUp } from "@/components/custom/signup";
import Home from "@/components/custom/home";
import { Login } from "@/components/custom/login";
import Layout from "@/layout";
import Dashboard from "@/pages/Dashboard";
import Projects from "@/pages/Projects";
import Analytics from "@/pages/Analytics";
import Settings from "@/pages/Settings";


const isAuthenticated = () => {
   return true;
 };

export const router = createBrowserRouter([
   {
      path: "/",
      element: <LandingPage />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/signup",
            element: <SignUp />,
         },
         {
            path: "/login",
            element: <Login />,
         },
      ],
   },
   {
      path: "/",
      element: isAuthenticated() ? <Layout /> : <Navigate to="/login" />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/projects", element: <Projects/> },
        { path: "/analytics", element: <Analytics/>},
        { path: "/settings", element: <Settings/>}
      ],
    },
]);

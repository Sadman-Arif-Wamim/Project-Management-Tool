import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { SignUp } from "@/components/custom/signup";
import Home from "@/components/custom/home";
import { Login } from "@/components/custom/login";
import { SideBarDrawer } from "@/components/custom/sidebardrawer";
import { ProjectList } from '@/components/custom/projectlist';

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
         {
            path: "/dashboard",
            element: <SideBarDrawer />,
         },
         {
            path: "/projects",
            element: <ProjectList/>,
         },
      ],
   },
]);

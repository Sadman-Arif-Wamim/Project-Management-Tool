import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { SignUp } from "@/components/custom/signup";
import Home from "@/components/custom/home";

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
      ],
   },
]);

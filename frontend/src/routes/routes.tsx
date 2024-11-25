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
import Todo from "@/pages/ToDo";
import Calender from "@/pages/Calender";
import Utilties from "@/pages/Utilities";
import Mailing from "@/pages/Mailing";
import ProjectBoard from "@/components/custom/projectboard";
import Backlog from "@/components/custom/backlog";


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
        {
         path: "/projects",
         element: <Projects />,
         children: [
            { index: true, element: <ProjectBoard /> },
           { path: "backlog", element: <Backlog/> },
           { path: "board", element: <ProjectBoard /> },
           { path: "chats", element: <div>Chats Component</div> },
           { path: "insights", element: <div>Insights Component</div> }, 
           { path: "security", element: <div>Security Component</div> },
         ],
       },
        { path: "/analytics", element: <Analytics/>},
        { path: "/settings", element: <Settings/>},
        { path: "/todo", element: <Todo/>},
        { path: "/calender", element: <Calender/>},
        { path: "/utilities", element: <Utilties/>},
        { path: "/mail", element: <Mailing/>}
      ],
    },
]);

import Menu from "@/components/custom/menu";
import { Outlet } from "react-router-dom";

export default function LandingPage() {
   return (
      <main className="container p-2">
         <div className="flex justify-end">
            <Menu />
         </div>
         <hr></hr>
         <Outlet />
      </main>
   );
}

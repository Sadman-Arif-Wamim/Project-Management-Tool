import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/app-sidebar";

const Layout: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <div className="flex-1 overflow-auto">
          <SidebarTrigger />
          <main className="p-4">
            <Outlet />  {/* Renders nested route components */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
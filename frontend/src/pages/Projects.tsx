import { ProjectList } from "@/components/custom/projectlist";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

export default function Projects() {
  return (
    <div className="w-screen flex">
      <div className="w-1/5">
        <ProjectList />
      </div>
      <div className="w-4/5">
        <div className="flex flex-1 gap-3 mb-5">       
          <Link to="/projects/board">
            <Button>Board</Button>
          </Link>
          <Link to="/projects/backlog">
            <Button>Backlog</Button>
          </Link>
          <Link to="/projects/chats">
            <Button>Chats</Button>
          </Link>
          <Link to="/projects/insights">
            <Button>Insights</Button>
          </Link>
          <Link to="/projects/security">
            <Button>Security</Button>
          </Link>
        </div>
        <div className="mt-5">
          <Outlet /> 
        </div>
      </div>
    </div>
  )
}



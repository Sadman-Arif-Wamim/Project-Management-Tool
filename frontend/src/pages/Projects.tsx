import ProjectBoard from "@/components/custom/projectboard";
import { ProjectList } from "@/components/custom/projectlist";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card
} from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="w-screen flex">
      <div className="w-1/5">
        <ProjectList />
      </div>
      <div className="w-4/5">
        <div className="flex flex-1 gap-3">
          <Sheet>
            <Card>
              <SheetTrigger asChild>
                <Button variant="outline">New Task</Button>
              </SheetTrigger>
            </Card>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Create New Task</SheetTitle>
                <SheetDescription>
                  Create a new task here. Click submit to save changes!
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input id="description" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="content" className="text-right">
                    Content
                  </Label>
                  <Input id="content" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Button>Insights</Button>
          <Button>Security</Button>
        </div>
        <ProjectBoard />
      </div>
    </div>
  )
}

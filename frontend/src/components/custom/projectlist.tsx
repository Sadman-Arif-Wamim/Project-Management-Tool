import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ProjectList() {
  const projectList = [
    {
      name: "Hello World 1",
      description: "First Project",
      content: "This project is a demo"
    },
    {
      name: "Hello World 2",
      description: "Second Project",
      content: "This project is a demo"
    },
    {
      name: "Hello World 3",
      description: "Third Project",
      content: "This project is a demo"
    },
    {
      name: "Hello World 4",
      description: "Fourth Project",
      content: "This project is a demo"
    },
    {
      name: "Hello World 5",
      description: "Fifth Project",
      content: "This project is a demo"
    }
  ]
  return (
    <Card className="w-full h-screen">
      <NewProject />
      <div className="flex flex-col items-center space-y-6 p-4">
        {projectList.map((item, index) => (
          <div key={index} className="w-full">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">{item.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{item.content}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Card>
  )
}

function NewProject() {
  return (
    <Sheet>
      <Card>
        <SheetTrigger asChild>
          <Button variant="outline">Create New Project</Button>
        </SheetTrigger>
      </Card>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create New Project</SheetTitle>
          <SheetDescription>
            Create a new project here. Click submit to save changes!
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
  )
}


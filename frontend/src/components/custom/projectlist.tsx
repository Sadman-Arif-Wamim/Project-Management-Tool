import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

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


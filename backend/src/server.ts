import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

let items: { id: number; name: string; description: string }[] = [];
let idCounter = 1;

app.post("/items", (req: Request, res: Response) => {
   const { name, description } = req.body;

   if (!name || !description) {
      return res
         .status(400)
         .json({ message: "Name and description are required" });
   }

   const newItem = { id: idCounter++, name, description };
   items.push(newItem);
   res.status(201).json(newItem);
});

app.get("/items", (req: Request, res: Response) => {
   res.json(items);
});

app.get("/items/:id", (req: Request, res: Response) => {
   const id = parseInt(req.params.id);
   const item = items.find((i) => i.id === id);

   if (!item) {
      return res.status(404).json({ message: "Item not found" });
   }

   res.json(item);
});

app.put("/items/:id", (req: Request, res: Response) => {
   const id = parseInt(req.params.id);
   const { name, description } = req.body;

   const itemIndex = items.findIndex((i) => i.id === id);

   if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found" });
   }

   if (!name || !description) {
      return res
         .status(400)
         .json({ message: "Name and description are required" });
   }

   items[itemIndex] = { id, name, description };
   res.json(items[itemIndex]);
});

app.delete("/items/:id", (req: Request, res: Response) => {
   const id = parseInt(req.params.id);
   const itemIndex = items.findIndex((i) => i.id === id);

   if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found" });
   }

   items.splice(itemIndex, 1);
   res.status(204).send();
});

app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
});

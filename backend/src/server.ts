import express, { Request, Response, Application } from "express";

import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import connectDB from './config/db';

dotenv.config();

const app: Application = express();

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

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

app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});

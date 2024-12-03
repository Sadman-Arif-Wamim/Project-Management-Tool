import express, { Request, Response, Application } from "express";
import passport from "passport";

import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import itemRoutes from "./routes/itemRoutes";
import connectDB from "./config/db";

require("./strategies/local");
require("./strategies/jwt");

const app: Application = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/item", itemRoutes);

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});

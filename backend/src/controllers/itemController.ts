import { Request, Response } from "express";
import Items from "../models/itemModel";
import mongoose from "mongoose";

export const createItem = async (req: Request, res: Response) => {
	try {
		const { title, description, status } = req.body;

		const newItem = new Items({
			title,
			description,
			status,
			created: new Date(),
			updated: new Date(),
		});

		const savedItem = await newItem.save();
		res.status(201).json(savedItem);
	} catch (error) {
		res.status(400).json({
			message: "Error creating item",
			error: error instanceof Error ? error.message : "Unknown error",
		});
	}
};

export const getAllItems = async (req: Request, res: Response) => {
	try {
		const items = await Items.find();
		res.status(200).json(items);
	} catch (error) {
		res.status(500).json({
			message: "Error fetching items",
			error: error instanceof Error ? error.message : "Unknown error",
		});
	}
};

export const getItemById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ message: "Invalid item ID" });
		}

		const item = await Items.findById(id);

		if (!item) {
			return res.status(404).json({ message: "Item not found" });
		}

		res.status(200).json(item);
	} catch (error) {
		res.status(500).json({
			message: "Error fetching item",
			error: error instanceof Error ? error.message : "Unknown error",
		});
	}
};

export const updateItem = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { title, description, status } = req.body;

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ message: "Invalid item ID" });
		}

		const updatedItem = await Items.findByIdAndUpdate(
			id,
			{
				title,
				description,
				status,
				updated: new Date(),
			},
			{ new: true, runValidators: true }
		);

		if (!updatedItem) {
			return res.status(404).json({ message: "Item not found" });
		}

		res.status(200).json(updatedItem);
	} catch (error) {
		res.status(400).json({
			message: "Error updating item",
			error: error instanceof Error ? error.message : "Unknown error",
		});
	}
};

export const deleteItem = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ message: "Invalid item ID" });
		}

		const deletedItem = await Items.findByIdAndDelete(id);

		if (!deletedItem) {
			return res.status(404).json({ message: "Item not found" });
		}

		res.status(200).json({
			message: "Item deleted successfully",
			deletedItem,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error deleting item",
			error: error instanceof Error ? error.message : "Unknown error",
		});
	}
};

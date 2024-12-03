import mongoose from "mongoose";

interface IItem {
	title: string;
	description: string;
	status: string;
	created: Date;
	updated: Date;
}

const itemSchema = new mongoose.Schema<IItem>({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	status: {
		type: String,
		required: true,
	},
	created: {
		type: Date,
	},
	updated: {
		type: Date,
	},
});

const Items = mongoose.model<IItem>("Items", itemSchema);
export default Items;

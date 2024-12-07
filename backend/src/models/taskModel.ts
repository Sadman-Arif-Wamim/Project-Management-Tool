import mongoose, { Document, Schema, Model } from "mongoose";

interface ITask extends Document { 
    id: string, 
    name: string,
    projectId: string,
    assigned: string,
    created: Date,
    state: string;
}

const TaskSchema: Schema<ITask> = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true}, 
        name: { type: String, required: true, unique: true },
        projectId: { type: String, required: true },
        assigned: { type: String },
        created: { type: Date, default: Date.now},
        state: { type: String }
    }
)

const Tasks: Model<ITask> = mongoose.model<ITask>('Tasks', TaskSchema);

export default Tasks;
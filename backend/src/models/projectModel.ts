import mongoose, { Document, Schema, Model } from 'mongoose';

interface IProject extends Document {
    id: string;
    name: string;
    admin: string;
    users: string;
    created: Date; 
}

const ProjectSchema: Schema<IProject> = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true},
        name: { type: String, required: true, unique: true},
        admin: { type: String, required: true },
        users: { type: String },
        created: { type: Date, default: Date.now }
    }
)

const Projects: Model<IProject> = mongoose.model<IProject>('Projects', ProjectSchema);

export default Projects;
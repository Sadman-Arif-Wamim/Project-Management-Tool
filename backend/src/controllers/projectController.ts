import { Request, Response } from 'express';
import Projects from '../models/projectModel';

export const getProject = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { projectId } = req.params;
        const projects = await Projects.findOne({ projectId: projectId });

        if (!projects) return res.status(404).json({ msg: 'No Projects Found' });


        return res.status(200).json({ projects });

    } catch {
        return res.status(500).json({ msg: 'Server Error' })
    }
}

export const getUserProjects = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userId } = req.params;
        const projects = await Projects.find({ userId: userId });

        if (!projects) return res.status(404).json({ msg: 'No Projects Found' });

        return res.status(200).json({ projects });

    } catch {
        return res.status(500).json({ msg: 'Server Error' })
    }
}

export const getUserProject = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userId, projectId } = req.query;
        const projects = await Projects.findOne({ userId: userId, projectId: projectId });

        if (!projects) return res.status(404).json({ msg: 'Invalid Project Details' });

        return res.status(200).json({ projects });

    } catch {
        return res.status(500).json({ msg: 'Server Error' })
    }
}

export const createUserProject = async ( req: Request, res: Response): Promise<Response> => {  
    try {
        const { name, admin, users } = req.body;

        let project = await Projects.findOne({ name: name });
        if (project) return res.status(404).json({ msg: 'Project Name Alreadyy Exists' });

        project = new Projects({ name, admin, users});

        await project.save();

        return res.status(200).json({ msg: 'Project Created Successfully ', project: project});

    } catch {
        return res.status(500).json({ msg: 'Server Erorr'})
    }
}

export const deleteUserProject = async ( req: Request, res: Response): Promise<Response> => {
    try{
        const { name } = req.params;

        let project = await Projects.findOne({ name: name });
        if (!project) return res.status(404).json({ msg: 'Project Not Found' });

        await Projects.deleteOne({ name: name });

        return res.status(200).json({ msg: 'Project Deleted Successfully '});

    } catch {
        return res.status(500).json({ msg: 'Server Error'})
    }
}
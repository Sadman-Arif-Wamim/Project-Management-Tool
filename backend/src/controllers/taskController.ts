import { Request, Response } from 'express';
import Tasks from '../models/taskModel';

export const getTask = async (req: Request, res: Response ): Promise<Response> => {
    try {
        const { taskId } = req.params;
        const tasks = await Tasks.findOne({ taskId: taskId });

        if(!tasks) return res.status(404).json({msg: 'Task Not Found!'});

        return res.status(200).json({ tasks });
    } catch {
        return res.status(500).json({ msg: 'Server Error'});
    }
}

export const getProjectTasks = async ( req: Request, res: Response ): Promise<Response> => {
    try{ 
        const { projectId } = req.params;
        const tasks = await Tasks.find({ projectId: projectId });

        if(!tasks) return res.status(404).json({msg: 'No Task Found'});

        return res.status(200).json( { tasks });
    } catch {
        return res.status(500).json({msg: 'Server Error'});
    }
}

export const getProjectTask = async ( req: Request, res: Response ): Promise<Response> => {
    try{ 
        const { projectId, taskId } = req.query;
        const task = await Tasks.findOne({ projectId: projectId, taskId: taskId});

        if(!task) return res.status(404).json({msg: 'No Task Found'});

        return res.status(200).json({ task });
    } catch { 
        return res.status(500).json({msg: 'Server Error'})
    }
}

export const createProjectTask = async ( req: Request, res: Response ): Promise<Response> => {
    try{ 
        const { name, projectId, assigned, state } = req.body;
        let task = await Tasks.findOne({ name: name, projectId: projectId });

        if(task) return res.status(404).json({msg: 'Task name already Exists'});

        task = new Tasks({ name, projectId, assigned, state})

        await task.save();
        return res.status(200).json({ msg: "Task created Successfully", task: task});
    } catch {
        return res.status(500).json({msg: 'Server Error'})
    }
}

export const deleteProjectTask = async ( req: Request, res: Response ): Promise<Response> => {
    try{
        const { taskId } = req.params;
        let task = await Tasks.findOne({ taskId: taskId });

        if(!task) return res.status(404).json({msg: 'Cannot Find Task'});

        await Tasks.deleteOne({ taskId: taskId });

        return res.status(200).json({ msg: 'Task delted successfully'});
    } catch {
        return res.status(500).json({msg: 'Server Error '})
    }
}
import express, { Router } from 'express';
import passport from 'passport';
import { getTask, getProjectTasks, getProjectTask, createProjectTask, deleteProjectTask } from '../controllers/taskController';

const router: Router = express.Router();

router.get('/taskid/:taskid',
    passport.authenticate('jwt', { session: false }),
    getTask
)

router.get('/projectid/:projectid',
    passport.authenticate('jwt', { session: false }),
    getProjectTasks
)

router.get('/getprojecttask',
    passport.authenticate('jwt', { session: false }),
    getProjectTask
)

router.post('/createprojecttask',
    passport.authenticate('jwt', { session: false }),
    createProjectTask
)

router.delete('/deleteprojecttask/:taskid',
    passport.authenticate('jwt', { session: false }),
    deleteProjectTask
)

export default router; 
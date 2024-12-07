import express, { Router } from 'express';
import passport from 'passport';
import { getProject, getUserProject, getUserProjects, createUserProject, deleteUserProject } from '../controllers/projectController';

const router: Router = express.Router();

router.get('/projectid/:projectId',
    passport.authenticate('jwt', { session: false }),
    getProject
)

router.get('/userid/:userId',
    passport.authenticate('jwt', { session: false }),
    getUserProjects
)

router.get('/getuserproject', 
    passport.authenticate('jwt', { session: false }),
    getUserProject
)

router.post('/createproject',
    passport.authenticate('jwt', { session: false }),
    createUserProject
)

router.delete('/deleteproject',
    passport.authenticate('jwt', { session: false }),
    deleteUserProject
)

export default router; 


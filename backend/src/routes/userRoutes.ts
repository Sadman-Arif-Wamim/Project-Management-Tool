import express, { Router } from 'express';
import passport from 'passport';
import { getUser, updateUser, deleteUser } from '../controllers/userController';

const router: Router = express.Router();

router.get('/profile/:userId', 
    passport.authenticate('jwt', { session: false }), 
    getUser
);

router.put('/profile/:userId',
    passport.authenticate('jwt', { session: false }),
    updateUser
);
  

router.delete('/profile/:userId',
    passport.authenticate('admin', { session: false }),
    deleteUser
);

export default router; 
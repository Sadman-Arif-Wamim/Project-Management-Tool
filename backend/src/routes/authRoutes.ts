import express, { Router } from 'express';
import { login, register } from '../controllers/authController'; 
import passport from 'passport';

const router: Router = express.Router();

router.post('/login', 
    passport.authenticate('local', { session: false }), 
    login
);

router.post('/register', register);

export default router; 

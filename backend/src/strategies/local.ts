import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import Users from "../models/userModel";
import bcrypt from 'bcrypt';

passport.use(
    new LocalStrategy({
        usernameField: 'email',
    }, async (email: string, password: string, done: any) => {
        try {
            const user = await Users.findOne({ email }).select('+password');
            if (!user) return done(null, false, { message: 'User not found' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return done(null, false, { message: 'Invalid credentials' });

            return done(null, user);
        } catch (error) {
            return done(error, null);
        }
    })
)
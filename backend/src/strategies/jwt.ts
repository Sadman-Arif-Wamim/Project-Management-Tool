import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import Users from '../models/userModel';

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string || 'default',
};

passport.use(
  new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const user = await Users.findById(jwtPayload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

passport.use('admin',
  new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      const user = await Users.findById(jwtPayload.id);
      if (user && user.role === 'admin') {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })

)
export default passport;

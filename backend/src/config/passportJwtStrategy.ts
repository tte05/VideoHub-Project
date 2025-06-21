import dotenv from 'dotenv';
import passport from 'passport';
import {Strategy as JWTStrategy, StrategyOptions, ExtractJwt} from 'passport-jwt';
import User from '../model/userSchema';

const opts : StrategyOptions ={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY as string,
};

passport.use(new JWTStrategy(opts, async (jwtPayload, done)=>{
    try{
        const user = await User.findById(jwtPayload.id).select('-password'); 
        if(!user){
            return done(null, false);
        } 
    return done(null, user);
    }catch(error) {
        console.error('JWT Strategy Error:', error);
        return done(error, false);
    }
}));

export default passport;
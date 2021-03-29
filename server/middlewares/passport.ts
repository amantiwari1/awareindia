import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";
import UserCollection from "../models/User/UserCollection";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};
export default new Strategy(opts, async (payload, done) => {
  const user = await UserCollection.findById(payload.id);

  try {
    if (user) {
      return done(undefined, user);
    }

    return done(undefined, false);
  } catch (error) {
    console.log(error);
  }
});

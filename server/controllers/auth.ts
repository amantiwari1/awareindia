import { RequestHandler, Request, Response, NextFunction } from "express";
import passport from "passport";
import UserDocument from "../models/User/UserDocument";
import AuthenticationResponse from "../../client/src/models/response/AuthenticationResponse.d";
import User from "../../client/src/models/User.d";
import UserCollection from "../models/User/UserCollection";

export const oauth2: RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
    passport.authenticate("oauth2")(req, res, next);
};
export const oauth2Callback: RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
    const authResultHandler = (error: Error, user: UserDocument | boolean, info: any) => {
        if (error) {
            return next(error);
        }
        if (!user) {
            return res.redirect("/login");
        }
        req.logIn(user, async (error: Error) => {
            if (error) {
                return next(error);
            }
            const others: UserDocument[] = await UserCollection.find({});
            (user as User).password = "######";
            others.forEach((other: UserDocument) => {
                other.password = "######";
            });
            return res.json({
                user: user,
                accessToken: info.accessToken,
                others: others
            } as AuthenticationResponse);
        });
    };
    passport.authenticate("oauth2", authResultHandler)(req, res, next);
};
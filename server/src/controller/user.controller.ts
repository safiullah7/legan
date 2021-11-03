import {Request, Response} from 'express';
import { get, omit } from 'lodash';
import { 
    createAccessToken, 
    createSession, createUser, 
    updateSession, validatePassword, 
    findSessions } from '../service/user.service';
import log from '../logger';
import { sign } from '../utils/jwt.utils';
import config from 'config';

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        return res.send(omit(user.toJSON(), "password"));
    } catch(error: any) {
        log.info(error);
        return res.status(409).send(error.message);
    }
}

export async function loginHandler(req: Request, res: Response) {
    const user: any = await validatePassword(req.body);

    if (!user)
        return res.status(401).send("Invalid username or password");
    
    const session: any = await createSession(user._id!, req.get("user-agent") || "");

    const accessToken = createAccessToken({user, session});

    const refreshToken = sign(session, {
        expiresIn: config.get("refreshTokenTtl"), // 1 year
    });

    return res.send({...user, accessToken, refreshToken});
}

export async function logoutHandler(req: Request, res: Response) {
    const sessionId = get(req, "user.session");
    await updateSession({ _id: sessionId }, { valid: false });

    return res.sendStatus(200);
}

export async function getUserSessionsHandler(req: Request, res: Response) {
    const userId = get(req, "user._id");
  
    const sessions = await findSessions({ user: userId, valid: true });
  
    return res.send(sessions);
}
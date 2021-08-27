import { Express, Request, Response } from 'express';
import { createUserHandler, getUserSessionsHandler, loginHandler, logoutHandler } from './controller/user.controller';
import {validateRequest, requiresUser} from './middlewares/index';
import { createUserSchema, loginSchema } from './schema/user.schema';

export default function (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

    app.post("/api/login", validateRequest(loginSchema), loginHandler);

    app.get("/api/sessions", requiresUser, getUserSessionsHandler);

    app.delete("/api/logout", requiresUser, logoutHandler);
}
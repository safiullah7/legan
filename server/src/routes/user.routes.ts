import {Express} from 'express'
import { createUserHandler, getUserSessionsHandler, loginHandler, logoutHandler } from '../controller/user.controller';
import { requiresUser, validateRequest } from '../middlewares';
import { createUserSchema, loginSchema } from '../schema/user.schema';

export default function (app: Express) {
    app.post("/api/register", validateRequest(createUserSchema), createUserHandler);

    app.post("/api/login", validateRequest(loginSchema), loginHandler);

    app.get("/api/sessions", requiresUser, getUserSessionsHandler);

    app.delete("/api/logout", requiresUser, logoutHandler);
}
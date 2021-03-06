import { Express, Request, Response } from 'express';
import userRoutes from './user.routes';
import homeRoutes from './home.routes';

export default function (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    userRoutes(app);

    homeRoutes(app);
}
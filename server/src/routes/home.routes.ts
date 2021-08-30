import { Express } from 'express'
import { createHomeContentHandler, getHomeContentHandler } from '../controller/home.controller'
import { validateRequest } from '../middlewares'
import { createHomeContentSchema } from '../schema/home.schema';

export default function (app: Express) {
    app.get('/api/home', getHomeContentHandler)

    app.post('/api/home', validateRequest(createHomeContentSchema), createHomeContentHandler);
}
import { Express } from 'express'
import { createHomeContentHandler, getHomeContentHandler, updateHomeContentHandler } from '../controller/home.controller'
import { validateRequest } from '../middlewares'
import { createHomeContentSchema, updateHomeContentSchema } from '../schema/home.schema';

export default function (app: Express) {
    app.get('/api/home', getHomeContentHandler)

    app.post('/api/home', validateRequest(createHomeContentSchema), createHomeContentHandler);

    app.put('/api/home/:id', validateRequest(updateHomeContentSchema), updateHomeContentHandler)
}
import { Express } from 'express'
import { createContactUsContentHandler, getContactUsContentHandler, handleContactUs, updateContactUsContentHandler } from '../controller/contactus.controller';
import { requiresUser } from '../middlewares';

export default function (app: Express) {
    app.post('/api/contactus', requiresUser, handleContactUs);

    app.get('/api/contactus-content', getContactUsContentHandler);

    app.post('/api/contactus-content', requiresUser, createContactUsContentHandler);

    app.put('/api/contactus-content/:id', requiresUser, updateContactUsContentHandler);
}
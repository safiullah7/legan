import { Express } from 'express'
import { addFaqHandler, getFaqByIdHandler, deleteFaqHandler, getFaqHandler, updateFaqHandler } from '../controller/faq.controller';

export default function (app: Express) {
    app.get('/api/faq', getFaqHandler);

    app.get('/api/faq/:id', getFaqByIdHandler);

    app.post('/api/faq', addFaqHandler);

    app.put('/api/faq/:id', updateFaqHandler);

    app.delete('/api/faq/:id', deleteFaqHandler);
}
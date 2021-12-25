import { Express } from 'express';
import { createNewRequestHandler, createSubmitRequestHandler, deleteSubmitRequestHandler, getSubmitRequestHandler, getSubmittedRequestsHandler, updateSubmitRequestContentHandler, updateSubmitRequestHandler } from '../controller/submitrequest.controller';
import { requiresUser } from '../middlewares';

export default function (app: Express) {
    app.get('/api/submitrequest-content', getSubmitRequestHandler);

    app.post('/api/submitrequest-content', createSubmitRequestHandler);

    app.put('/api/submitrequest-content/:id', updateSubmitRequestContentHandler);


    // queries section ==========================================================

    app.get('/api/submitrequest', getSubmittedRequestsHandler);

    app.post('/api/submitrequest', createNewRequestHandler);

    app.put('/api/submitrequest/:id', updateSubmitRequestHandler);

    app.delete('/api/submitrequest/:id', deleteSubmitRequestHandler);
}
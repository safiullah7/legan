import { Express } from 'express';
import { createPolicyHandler, getPolicyHandler, updatePolicyHandler } from '../controller/policy.controller';
import { requiresUser } from '../middlewares';

export default function (app: Express) {
    app.get('/api/policy', getPolicyHandler);

    app.post('/api/policy', createPolicyHandler);

    app.put('/api/policy/:id', updatePolicyHandler);
}
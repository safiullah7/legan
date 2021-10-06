import { Express } from 'express'
import { addTeamMemberHandler, deleteTeamMemberHandler, getTeamHandler, updateTeamMemberHandler } from '../controller/team.controller';
import { requiresUser, validateRequest } from '../middlewares';
import { addTeamMemberSchema } from '../schema/team.schema';

export default function (app: Express) {
    app.get('/api/team', getTeamHandler);

    app.post('/api/team', validateRequest(addTeamMemberSchema), addTeamMemberHandler); // add requiresUser

    app.put('/api/team/:id', updateTeamMemberHandler); // add requiresUser

    app.delete('/api/team/:id', deleteTeamMemberHandler); // add requiresUser
}
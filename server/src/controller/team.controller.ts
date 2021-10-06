import { Request, Response } from "express";
import { addNewTeamMember, deleteTeamMember, getTeam, updateTeamMember } from "../service/team.service";


export async function getTeamHandler(req: Request, res: Response) {
    const team = await getTeam();
    return res.send(team);
}

export async function addTeamMemberHandler(req: Request, res: Response) {
    const body = req.body;
    const files = req.files;

    console.log(files);
    // const teamMember = await addNewTeamMember({...body});
    // return res.send(teamMember);
}

export async function updateTeamMemberHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    const updatedTeamMember = {...req.body};

    const update = updateTeamMember(_id, updatedTeamMember);
    return res.send(update);        
}

export async function deleteTeamMemberHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    const deleteMember = await deleteTeamMember(_id);

    return res.send(deleteMember);
}
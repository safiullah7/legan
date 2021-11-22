import { Request, Response } from "express";
import { addNewTeamMember, deleteTeamMember, getTeam, updateTeamMember } from "../service/team.service";
import { upload } from "../utils/cloudinary.util";


export async function getTeamHandler(req: Request, res: Response) {
    const team = await getTeam();
    return res.send(team);
}

export async function addTeamMemberHandler(req: Request, res: Response) {
    const body = req.body;
    const file = req.files!.file as any;

    let url = "";
    if (file !== null) {
        const result: any = await upload(file.data);
        url = result!.secure_url;
    }
    const newTeamMember = { ...body, imageUrl: url}
    const teamMember = await addNewTeamMember(newTeamMember);
    return res.send(teamMember);
}

export async function updateTeamMemberHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    let updatedTeamMember = {...req.body};
    const file = req.files?.file as any;

    console.log(file);
    if (file && file !== null) {
        let url = "";
        const result: any = await upload(file.data);
        url = result!.secure_url;
        updatedTeamMember.imageUrl = url
    }

    const update = await updateTeamMember(_id, updatedTeamMember);
    const team = await getTeam();
    return res.send(team);        
}

export async function deleteTeamMemberHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    const deleteMember = await deleteTeamMember(_id);

    return res.send(deleteMember);
}
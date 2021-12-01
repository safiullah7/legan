import { Request, Response } from "express";
import { addNewTeamMember, deleteTeamMember, getTeam, updateTeamMember } from "../service/team.service";
import { upload, deleteImage } from "../utils/cloudinary.util";


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
    await addNewTeamMember(newTeamMember);
    const team = await getTeam();
    return res.send(team);
}

export async function updateTeamMemberHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    let updatedTeamMember = {...req.body};
    const file = req.files?.file as any;

    if (file && file !== null) {
        let url = "";
        const result: any = await upload(file.data);
        url = result!.secure_url;
        updatedTeamMember.imageUrl = url
        if (updatedTeamMember.imagePublicId) await deleteImage(updatedTeamMember.imagePublicId);
        updatedTeamMember.imagePublicId = result!.public_id
    }

    await updateTeamMember(_id, updatedTeamMember);
    const team = await getTeam();
    return res.send(team);        
}

export async function deleteTeamMemberHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    await deleteTeamMember(_id);
    const team = await getTeam();
    
    return res.send(team);
}
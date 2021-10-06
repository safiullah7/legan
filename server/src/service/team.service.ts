import { DocumentDefinition } from 'mongoose';
import Team from "../model/team.model";
import { ITeam } from '../types/team.type';

export async function getTeam() {
    return Team.find().lean();
}

export async function addNewTeamMember(input: DocumentDefinition<ITeam>) {
    return Team.create(input);
}

export async function updateTeamMember(_id: string, input: DocumentDefinition<ITeam>) {
    await Team.findByIdAndUpdate(_id, input);
    return Team.findById(_id);
}

export async function deleteTeamMember(_id: string) {
    return Team.findByIdAndDelete(_id);
}
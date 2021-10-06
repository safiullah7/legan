import mongoose from 'mongoose';
import { ITeam } from '../types/team.type';

const TeamSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        imageUrl: {type: String},
        title: {type: String, required: true},
        description: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

const Team = mongoose.model<ITeam>("Team", TeamSchema);

export default Team;
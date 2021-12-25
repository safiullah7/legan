import mongoose from 'mongoose';
import { ISubmitRequest } from '../types/contactus.type';

const SubmitRequestSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        queryType: { type: String, required: true },
        website: { type: String, required: true },
        country: { type: String, required: true },
        description: { type: String, required: true },
        attachedFilePublic_id: { type: String },
        attachedFilePath: { type: String },
        active: { type: Boolean, required: true }
    },
    {
        timestamps: true
    }
)

const SubmitRequest = mongoose.model<ISubmitRequest>("SubmitRequest", SubmitRequestSchema);

export default SubmitRequest;
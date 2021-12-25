import { ISubmitRequestContent } from '../types/contactus.type';
import mongoose from 'mongoose';

const SubmitRequestContentSchema = new mongoose.Schema(
    {
        content: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

const SubmitRequestContent = mongoose.model<ISubmitRequestContent>("SubmitRequestContent", SubmitRequestContentSchema);

export default SubmitRequestContent;
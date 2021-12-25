import mongoose from 'mongoose';
import { IContactUs } from '../types/contactus.type';

const ContactUsSchema = new mongoose.Schema(
    {
        content: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

const ContactUs = mongoose.model<IContactUs>("ContactUs", ContactUsSchema);

export default ContactUs;
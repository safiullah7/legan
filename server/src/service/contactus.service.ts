import { DocumentDefinition } from 'mongoose';
import ContactUs from "../model/contactus.model";
import { ContactQuery, IContactUs } from "../types/contactus.type";
import sendEmail from "../utils/email.util";

export function sendQuery(input: ContactQuery) {
    return sendEmail(input);
}

export async function getContactusContent() {
    return ContactUs.find().lean();
}

export async function createContactUsContent(input: DocumentDefinition<IContactUs>) {
    return ContactUs.create(input);
}

export async function updateContactUsContent(_id: string, input: DocumentDefinition<IContactUs>) {
    await ContactUs.findByIdAndUpdate(_id, input);

    return ContactUs.findById(_id);
}
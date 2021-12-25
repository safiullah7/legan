import { Request, Response } from "express";
import { createContactUsContent, getContactusContent, sendQuery, updateContactUsContent } from "../service/contactus.service";

export async function handleContactUs(req: Request, res: Response) {
    const body = req.body;
    const home = await sendQuery({ ...body });
    return res.send(home);
}

export async function getContactUsContentHandler(req: Request, res: Response) {
    const contactusContent = await getContactusContent();
    return res.send(contactusContent[0]);
}

export async function createContactUsContentHandler(req: Request, res: Response) {
    const body = req.body;
    const contactUs = await createContactUsContent({ ...body });
    return res.send(contactUs);
}

export async function updateContactUsContentHandler(req: Request, res: Response) {
    const { id: _id } = req.params;
    const newContactUscontactUs = { ...req.body };
    const contactUs = await updateContactUsContent(_id, newContactUscontactUs);
    return res.send(contactUs);
}
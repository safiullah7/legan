import { Request, Response } from "express";
import { addNewFaq, deleteFaq, getFaq, getFaqById, updateFaq } from "../service/faq.service";

export async function getFaqHandler(req: Request, res: Response) {
    const faq = await getFaq();
    return res.send(faq);
}

export async function getFaqByIdHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    const faq = await getFaqById(_id);
    return res.send(faq);
}

export async function addFaqHandler(req: Request, res: Response) {
    const body = req.body;
    let faq = await addNewFaq(body);
    faq = await getFaq();
    return res.send(faq);
}

export async function updateFaqHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    const updatedFaq = {...req.body};

    const updated = await updateFaq(_id, updatedFaq);
    const faq = await getFaq();
    return res.send(faq);        
}

export async function deleteFaqHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    const deletedFaq = await deleteFaq(_id);

    return res.send(deletedFaq);
}
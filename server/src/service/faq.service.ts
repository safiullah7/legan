import { DocumentDefinition } from 'mongoose';
import Faq from "../model/faq.model";
import { IFaq } from '../types/faq.type';

export async function getFaq() {
    return Faq.find().lean();
}

export async function getFaqById(_id: string) {
    return Faq.findById(_id);
}

export async function addNewFaq(input: DocumentDefinition<IFaq>) {
    Faq.create(input);
    return Faq.find().lean()
}

export async function updateFaq(_id: string, input: DocumentDefinition<IFaq>) {
    await Faq.findByIdAndUpdate(_id, input);
    return Faq.findById(_id);
}

export async function deleteFaq(_id: string) {
    return Faq.findByIdAndDelete(_id);
}
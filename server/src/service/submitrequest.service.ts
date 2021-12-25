import { DocumentDefinition } from "mongoose";
import SubmitRequest from "../model/submitrequest.model";
import SubmitRequestContent from "../model/submitrequestcontent.model";
import { ISubmitRequest, ISubmitRequestContent } from "../types/contactus.type";

export async function getSubmitRequestContent() {
    return SubmitRequestContent.find().lean();
}

export async function createSubmitRequestContent(input: DocumentDefinition<ISubmitRequestContent>) {
    return SubmitRequestContent.create(input);
}

export async function updateSubmitRequestContent(_id: string, input: DocumentDefinition<ISubmitRequestContent>) {
    await SubmitRequestContent.findByIdAndUpdate(_id, input);

    return SubmitRequestContent.findById(_id);
}

// requests section below

export async function getRequests() {
    const sort = { 'timestamp': -1 }
    return SubmitRequest.find({}).sort({ createdAt: 'desc' }).exec();
}

export async function addNewRequest(input: DocumentDefinition<ISubmitRequest>) {
    await SubmitRequest.create(input);
    return getRequests();
}

export async function getRequestById(_id: string) {
    return SubmitRequest.findById(_id);
}

export async function updateRequest(_id: string, input: DocumentDefinition<ISubmitRequest>) {
    await SubmitRequest.findByIdAndUpdate(_id, input);
    return SubmitRequest.findById(_id);
}

export async function deleteRequest(_id: string) {
    return SubmitRequest.findByIdAndDelete(_id);
}
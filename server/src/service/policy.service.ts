import { DocumentDefinition } from "mongoose";
import Policy from "../model/policy.model";
import { IPolicy } from "../types/policy.type";

export async function getPolicyContent() {
    return Policy.find().lean();
}

export async function createPolicyContent(input: DocumentDefinition<IPolicy>) {
    return Policy.create(input);
}

export async function updatePolicyContent(_id: string, input: DocumentDefinition<IPolicy>) {
    await Policy.findByIdAndUpdate(_id, input);

    return Policy.findById(_id);
}
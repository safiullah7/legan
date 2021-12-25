import { Request, Response } from 'express';
import { createPolicyContent, getPolicyContent, updatePolicyContent } from '../service/policy.service';

export async function getPolicyHandler(req: Request, res: Response) {
    const poplicy = await getPolicyContent();
    return res.send(poplicy[0]);
}

export async function createPolicyHandler(req: Request, res: Response) {
    const body = req.body;
    const policy = await createPolicyContent({ ...body });
    return res.send(policy);
}

export async function updatePolicyHandler(req: Request, res: Response) {
    const { id: _id } = req.params;
    const updatedPolicy = { ...req.body };
    const policy = await updatePolicyContent(_id, updatedPolicy);
    return res.send(policy);
}
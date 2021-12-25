import { Request, Response } from 'express';
import { addNewRequest, createSubmitRequestContent, deleteRequest, getRequestById, getRequests, getSubmitRequestContent, updateRequest, updateSubmitRequestContent } from '../service/submitrequest.service';
import { ISubmitRequest } from '../types/contactus.type';
import { deleteImage, upload } from '../utils/cloudinary.util';

export async function getSubmitRequestHandler(req: Request, res: Response) {
    const submitRequest = await getSubmitRequestContent();
    console.log(submitRequest[0])
    return res.send(submitRequest[0]);
}

export async function createSubmitRequestHandler(req: Request, res: Response) {
    const body = req.body;
    const submitRequest = await createSubmitRequestContent({ ...body });
    return res.send(submitRequest);
}

export async function updateSubmitRequestContentHandler(req: Request, res: Response) {
    const { id: _id } = req.params;
    const updatedSubmitRequest = { ...req.body };
    const submitRequest = await updateSubmitRequestContent(_id, updatedSubmitRequest);
    console.log(submitRequest);
    return res.send(submitRequest);
}

export async function createNewRequestHandler(req: Request, res: Response) {
    console.log(req.files);
    const body = req.body;
    const file = req.files?.file as any;

    let url = "";
    let public_id = "";
    if (file !== null && file) {
        const result: any = await upload(file.data);
        url = result!.secure_url;
        public_id = result!.public_id;
    }
    // const newRequest: ISubmitRequest = { ...body, attachedFilePathimageUrl: url, attachedFilePublic_id: public_id }
    const newRequest: ISubmitRequest = {
        name: body.name,
        email: body.email,
        country: body.country,
        description: body.description,
        website: body.website,
        queryType: body.queryType,
        attachedFilePath: url,
        attachedFilePublic_id: public_id,
        active: true
    }
    const updatedRequests = await addNewRequest(newRequest);
    return res.send(updatedRequests);
}

export async function updateSubmitRequestHandler(req: Request, res: Response) {
    const { id: _id } = req.params;
    const updatedRequest = { ...req.body };
    const file = req.files?.file as any;

    if (file && file !== null) {
        let url = "";
        const result: any = await upload(file.data);
        url = result!.secure_url;
        updatedRequest.attachedFilePath = url
        if (updatedRequest.attachedFilePublic_id) await deleteImage(updatedRequest.attachedFilePublic_id);
        updatedRequest.attachedFilePublic_id = result!.public_id
    }

    await updateRequest(_id, updatedRequest);
    const respone = await getRequests()
    return res.send(respone);
}

export async function getSubmittedRequestsHandler(req: Request, res: Response) {
    const submitRequests = await getRequests();
    console.log(submitRequests)
    return res.send(submitRequests);
}

export async function deleteSubmitRequestHandler(req: Request, res: Response) {
    const { id: _id } = req.params;
    await deleteRequest(_id);
}
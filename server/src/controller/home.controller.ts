import { Request, Response } from "express";
import { createHomeContent, getHomeContent, updateHomeContent } from "../service/home.service";


export async function getHomeContentHandler(req: Request, res: Response) {
    const homeContent = await getHomeContent();
    return res.send(homeContent[0]);
}

export async function createHomeContentHandler(req: Request, res: Response) {
    const body = req.body;
    const home = await createHomeContent({...body});
    return res.send(home);
}

export async function updateHomeContentHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    const newHomeContent = {...req.body};
    const home = await updateHomeContent(_id, newHomeContent);
    return res.send(home);
}
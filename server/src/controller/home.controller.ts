import { Request, Response } from "express";
import { createHomeContent, getHomeContent } from "../service/home.service";


export async function getHomeContentHandler(req: Request, res: Response) {
    const homeContent = await getHomeContent();
    return res.send(homeContent[0]);
}

export async function createHomeContentHandler(req: Request, res: Response) {
    const body = req.body;
    const home = await createHomeContent({...body});
    return res.send(home);
}
import { DocumentDefinition } from 'mongoose';
import Home from "../model/home.model";
import { IHome } from '../types/home.type';


export async function getHomeContent() {
    return Home.find().lean();
}

export async function createHomeContent(input: DocumentDefinition<IHome>) {
    return Home.create(input);
}
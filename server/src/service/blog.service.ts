import { DocumentDefinition } from 'mongoose';
import Blog from "../model/blog.model";
import { IBlog } from '../types/blog.type';

export async function getBlog() {
    return Blog.find().lean();
}

export async function getBlogById(_id: string) {
    return Blog.findById(_id);
}

export async function addNewBlog(input: DocumentDefinition<IBlog>) {
    Blog.create(input);
    return Blog.find().lean()
}

export async function updateBlog(_id: string, input: DocumentDefinition<IBlog>) {
    await Blog.findByIdAndUpdate(_id, input);
    return Blog.findById(_id);
}

export async function deleteBlog(_id: string) {
    return Blog.findByIdAndDelete(_id);
}
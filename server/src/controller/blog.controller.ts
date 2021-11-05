import { Request, Response } from "express";
import { addNewBlog, deleteBlog, getBlog, updateBlog } from "../service/blog.service";
import { upload } from "../utils/cloudinary.util";


export async function getBlogHandler(req: Request, res: Response) {
    const blog = await getBlog();
    return res.send(blog);
}

export async function addBlogHandler(req: Request, res: Response) {
    const body = req.body;
    const file = req.files?.file as any;

    let url = "";
    if (file !== null && file) {
        const result: any = await upload(file.data);
        url = result!.secure_url;
    }
    const newBlog = { ...body, imageUrl: url}
    const Blog = await addNewBlog(newBlog);
    return res.send(Blog);
}

export async function updateBlogHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    const updatedBlog = {...req.body};

    const update = updateBlog(_id, updatedBlog);
    return res.send(update);        
}

export async function deleteBlogHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    const deleteMember = await deleteBlog(_id);

    return res.send(deleteMember);
}
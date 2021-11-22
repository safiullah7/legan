import { Request, Response } from "express";
import { addNewBlog, deleteBlog, getBlog, getBlogById, updateBlog } from "../service/blog.service";
import { upload } from "../utils/cloudinary.util";


export async function getBlogHandler(req: Request, res: Response) {
    const blog = await getBlog();
    return res.send(blog);
}

export async function getBlogByIdHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    const blog = await getBlogById(_id);
    return res.send(blog);
}

export async function addBlogHandler(req: Request, res: Response) {
    console.log(req.files);
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

    const file = req.files?.file as any;

    if (file && file !== null) {
        let url = "";
        const result: any = await upload(file.data);
        url = result!.secure_url;
        updatedBlog.imageUrl = url
    }

    const update = await updateBlog(_id, updatedBlog);
    const respone = await getBlog()
    return res.send(respone);        
}

export async function deleteBlogHandler(req: Request, res: Response) {
    const {id: _id} = req.params;
    const deleteMember = await deleteBlog(_id);

    return res.send(deleteMember);
}
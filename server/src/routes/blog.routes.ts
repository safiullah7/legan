import { Express } from 'express'
import { addBlogHandler, deleteBlogHandler, getBlogHandler, updateBlogHandler } from '../controller/blog.controller';

export default function (app: Express) {
    app.get('/api/blog', getBlogHandler);

    app.post('/api/blog', addBlogHandler); // add requiresUser

    app.put('/api/blog/:id', updateBlogHandler); // add requiresUser

    app.delete('/api/blog/:id', deleteBlogHandler); // add requiresUser
}
import mongoose from 'mongoose';
import { IBlog } from '../types/blog.type';

const BlogSchema = new mongoose.Schema(
    {
        category: {type: String, required: true},
        imagePublicId: {type: String},
        imageUrl: {type: String},
        title: {type: String, required: true},
        description: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

const Blog = mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
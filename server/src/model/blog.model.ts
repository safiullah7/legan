import mongoose from 'mongoose';
import { IBlog } from '../types/blog.type';

const BlogSchema = new mongoose.Schema(
    {
        type: {type: String},
        imagePublicId: {type: String},
        imageUrl: {type: String},
        title: {type: String, required: true},
        description: {type: String, required: true},
        content: {type: String},
        date: {type: String},
        writer: {type: String},
        likes: {type: Number},
        views: {type: Number},
        id: {type: String}
    },
    {
        timestamps: true
    }
);

const Blog = mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
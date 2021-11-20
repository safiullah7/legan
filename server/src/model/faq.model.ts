import mongoose from 'mongoose';
import { IFaq } from '../types/faq.type';

const FaqSchema = new mongoose.Schema(
    {
        question: {type: String},
        answer: {type: String},
    },
    {
        timestamps: true
    }
);

const Faq = mongoose.model<IFaq>("Faq", FaqSchema);

export default Faq;
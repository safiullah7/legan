import { object, string } from 'yup';

export const addFaqSchema = object({
    body: object({
        question: string().required(),
        answer: string().required()
    })
});
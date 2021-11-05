import { mixed, object, string } from 'yup';

export const addBlogSchema = object({
    body: object({
        // attachment: mixed().test("fileSize", "The file is too large", (value) => {
        //     if (!value.length) return true // attachment is optional
        //     return value[0].size <= 2000000
        //   }),
        category: string().required(),
        title: string().required(),
        description: string().required()
    })
});
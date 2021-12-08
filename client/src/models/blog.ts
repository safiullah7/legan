export interface IBlog {
    _id:  number | string,
    imagePublicId: string,
    type: string,
    date: string,
    writer: string,
    views: number,
    likes: number,
    imageUrl: string,
    title: string,
    content: string,
    description: string,
}

export interface IAddBlog {
    _id?: string,
    imagePublicId?: string | null,
    file?: Blob | string | null,
    type: string,
    date: string,
    writer: string,
    title: string,
    content: string,
    description: string,
}

export interface ICategory {
    _id: number,
    name: string,
    value: string,
}

export interface IStyled {
  imageUrl: string,
}

export const categories: ICategory[] = [
    { _id: 0, name: 'All', value: '' },
    { _id: 1, name: 'Data Protection', value: 'DP' },
    { _id: 2, name: 'Intellectual Property', value: 'IP' },
    { _id: 3, name: 'Contracts', value: 'contracts' },
    { _id: 4, name: 'Corporate', value: 'corporate' },
    { _id: 5, name: 'Artificial Intelligence', value: 'AI' },
    { _id: 6, name: 'Software Licensing', value: 'SL' },
    { _id: 7, name: 'Blockchain', value: 'blockchain' },
];
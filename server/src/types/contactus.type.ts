export interface ContactQuery {
    name: string,
    surname: string,
    email: string,
    message: string
};

export interface IContactUs {
    content: string
}

export interface ISubmitRequestContent {
    _id: string,
    content: string,
}

export interface ISubmitRequest {
    name: string,
    email: string,
    queryType: string,
    website: string,
    country: string,
    description: string,
    attachedFilePublic_id: string,
    attachedFilePath: string,
    active: boolean
}
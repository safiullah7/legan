import axios, { AxiosResponse } from "axios"

const getCountries = () => {

    let countriesOptions: ICountries[] = [
        {
            id: 0,
            name: 'USA',
            flag: ''
        },
        {
            id: 1,
            name: 'UK',
            flag: ''
        },
        {
            id: 2,
            name: 'GER',
            flag: ''
        },
        {
            id: 3,
            name: 'TUR',
            flag: ''
        },
        {
            id: 4,
            name: 'SAU',
            flag: ''
        },
        {
            id: 5,
            name: 'BRA',
            flag: ''
        },
    ];

    return countriesOptions;
}

const getQueryTypes = () => {
    let queryTypes: IQueryType[] = [
        {
            id: 0,
            name: 'Crypto & Blockchain'
        },
        {
            id: 1,
            name: 'Data Protection'
        },
        {
            id: 2,
            name: 'Tech Contracts'
        },
        {
            id: 3,
            name: 'Internet Law'
        },
        {
            id: 4,
            name: 'Internet Law'
        },
        {
            id: 5,
            name: 'Other'
        }
    ];

    return queryTypes;
}


interface ICountries {
    id: number,
    name: string,
    flag: string,
}

interface IQueryType {
    id: number,
    name: string,
}

export interface ISubmitRequestContent {
    _id: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}

export interface ISubmitRequest {
    _id: string,
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

export interface ISubmitRequestDto {
    name: string;
    email: string;
    queryType: string;
    website: string;
    country: string;
    description: string;
    terms: boolean;
    file: File | null;
}

export const countries: ICountries[] = getCountries();
export const queryTypes: IQueryType[] = getQueryTypes();
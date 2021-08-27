import { getDate } from "./common";

export interface IBlog {
    id: number,
    type: string,
    date: string,
    writer: string,
    heading: string,
    content: string,
}

interface IBlogsPage {
    heighlight: IBlog,
    recentBlogs: IBlog[],
}

export interface ICategory {
    id: number,
    name: string,
    value: string,
 }

export const blog: IBlogsPage = {   
    heighlight: {
        id: 0,
        type: 'privacy',
        date: getDate(),
        writer: 'John Doe',
        heading: 'Lorem ipsum dolor sit cakir loth waka omur',
        content: `Lorem ipsum dolor sit amet consedtur ipsehyu
                    ctetur, adipisicing elit. Repellendus solor seatfor
                    porro illum dolorem doloremque volante
                    Lorem ipsum dolor sit amet consedtur ipsehyu
                    ctetur, adipisicing elit. Repellendus solor seatfor
                    porro illum dolorem doloremque volante`,
    },
    recentBlogs: [
        {
            id: 1,
            type: 'IP',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
        {
            id: 2,
            type: 'AI',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
        {
            id: 3,
            type: 'IP',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
        {
            id: 4,
            type: 'IP',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
         {
            id: 5,
            type: 'IP',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
        {
            id: 6,
            type: 'DP',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
        {
            id: 7,
            type: 'SL',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
        {
            id: 8,
            type: 'blockchain',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
         {
            id: 9,
            type: 'IP',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
        {
            id: 10,
            type: 'contracts',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
    ],
}
export const categories: ICategory[] = [
    { id: 0, name: 'All', value: '' },
    { id: 1, name: 'Data Protection', value: 'DP' },
    { id: 2, name: 'Intellectual Property', value: 'IP' },
    { id: 3, name: 'Contracts', value: 'contracts' },
    { id: 4, name: 'Corporate', value: 'corporate' },
    { id: 5, name: 'Artificial Intelligence', value: 'AI' },
    { id: 6, name: 'Software Licensing', value: 'SL' },
    { id: 7, name: 'Blockchain', value: 'blockchain' },
];
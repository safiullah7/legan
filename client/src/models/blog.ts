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
            type: 'privacy',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
        {
            id: 2,
            type: 'privacy',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
        {
            id: 3,
            type: 'privacy',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
        {
            id: 4,
            type: 'privacy',
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
        },
    ],
}
export const categories: ICategory[] = [
    { id: 0, name: 'Data Protection' },
    { id: 1, name: 'Intellectual Property' },
    { id: 2, name: 'Contracts' },
    { id: 3, name: 'Corporate' },
    { id: 4, name: 'Artificial Intelligence' },
    { id: 5, name: 'Software Licensing' },
    { id: 6, name: 'Blockchain' },
];
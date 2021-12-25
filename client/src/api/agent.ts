import { AxiosResponse } from 'axios';
import axios from 'axios';
import { IHome } from '../models/home';
import { ILogin, IUser } from '../models/user';
import { AddTeamMember, ITeamMember } from '../models/team';
import { IBlog, IAddBlog } from '../models/blog';
import { IPropsFAQsListItem } from "../models/faqs";
import { ContactUsQuery, IContactUs } from '../models/contactUs';
import { ISubmitRequest, ISubmitRequestContent, ISubmitRequestDto } from '../models/submit';
import { IPolicy } from '../models/privacyPolicy';

axios.defaults.baseURL = 'https://legan-server.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:1338/api';

axios.interceptors.request.use(
    (config) => {
        const user: IUser = JSON.parse(window.localStorage.getItem('user')!);
        if (user !== null) config.headers.authorization = `Bearer ${user.accessToken}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody),
    postForm: (url: string, formObject: any = null) => {
        let formData = new FormData();
        // formData.append('file', file); // key 'File' must match with api method param
        if (formObject !== null) {
            for (const key of Object.keys(formObject)) {
                formData.append(key, formObject[key]);
            }
        }
        return axios.post(url, formData, {
            headers: { 'Content-type': 'multipart/form-data' }
        }).then(responseBody)
    },
    putForm: (url: string, formObject: any = null) => {
        let formData = new FormData();
        // formData.append('file', file); // key 'File' must match with api method param
        if (formObject !== null) {
            for (const key of Object.keys(formObject)) {
                formData.append(key, formObject[key]);
            }
        }
        return axios.put(url, formData, {
            headers: { 'Content-type': 'multipart/form-data' }
        }).then(responseBody)
    },
    postBlogForm: (url: string, formObject: any = null) => {
        let formData = new FormData();
        // formData.append('file', file); // key 'File' must match with api method param
        if (formObject !== null) {
            for (const key of Object.keys(formObject)) {
                formData.append(key, formObject[key]);
            }
        }
        return axios.post(url, formData, {
            headers: { 'Content-type': 'multipart/form-data' }
        }).then(responseBody)
    },
    putBlogForm: async (url: string, formObject: any = null) => {
        let formData = new FormData();
        // formData.append('file', file); // key 'File' must match with api method param
        if (formObject !== null) {
            for (const key of Object.keys(formObject)) {
                formData.append(key, formObject[key]);
            }
        }

        // console.log("UPDATE BLOG: ", formData);
        // return axios.get(url).then(responseBody)
        return axios.put(url, formData, {
            headers: { 'Content-type': 'multipart/form-data' }
        }).then(responseBody)
    }
};

const home = {
    getContent: (): Promise<IHome> => requests.get('/home'),
    updateContent: (updatedHomeContent: IHome): Promise<IHome> =>
        requests.put(`/home/${updatedHomeContent._id}`, { ...updatedHomeContent })
    // details: (id: string) => requests.get(`/activities/${id}`),
    // create: (activity: IProduct) => requests.post('/activities', activity),
    // update: (activity: IProduct) => requests.put(`/activities/${activity.id}`, activity),
    // delete: (id: string) => requests.del(`/activities/${id}`),
    // attend: (id: string) => requests.post(`/activities/${id}/attend`, {}),
    // unattend: (id: string) => requests.del(`/activities/${id}/attend`)
};

const user = {
    login: (login: ILogin): Promise<IUser> => requests.post('/login', { email: login.email, password: login.password })
}

const team = {
    getTeam: (): Promise<ITeamMember[]> => requests.get('/team'),
    addTeamMember: (obj: AddTeamMember): Promise<ITeamMember[]> => {
        return requests.postForm('/team', obj)
    },
    updateTeamMember: (obj: AddTeamMember): Promise<ITeamMember[]> => {
        const id = obj._id
        delete obj._id
        return requests.putForm(`/team/${id}`, obj)
    },
    deleteTeamMember: (_id: string): Promise<ITeamMember[]> => requests.del(`/team/${_id}`)
}

const blog = {
    getBlogs: (): Promise<IBlog[]> => requests.get('/blog'),
    getBlog: (_id: string): Promise<IBlog> => requests.get(`/blog/${_id}`),
    saveBlog: (blog: IAddBlog): Promise<IBlog[]> => requests.postBlogForm('/blog', blog),
    updateBlog: (blog: IAddBlog): Promise<IBlog[]> => {
        const id = blog._id
        delete blog._id
        return requests.putBlogForm(`/blog/${id}`, blog)
    },
    deleteBlog: (_id: string): Promise<IBlog[]> => requests.del(`/blog/${_id}`)
}

const faq = {
    getFAQs: (): Promise<IPropsFAQsListItem[]> => requests.get('/faq'),
    getFAQ: (_id: string): Promise<IPropsFAQsListItem> => requests.get(`/faq/${_id}`),
    saveFAQ: (faq: IPropsFAQsListItem): Promise<IPropsFAQsListItem[]> => requests.post('/faq', faq),
    updateFAQ: (faq: IPropsFAQsListItem): Promise<IPropsFAQsListItem[]> => {
        requests.put(`/faq/${faq._id}`, faq)
        return requests.get('/faq')
    },
    deleteFAQ: (_id: string): Promise<IPropsFAQsListItem> => requests.del(`/faq/${_id}`)
}

const contactUs = {
    postQuery: (query: ContactUsQuery) => requests.post('/contactus', query),
    getContactUsContent: () => requests.get('/contactus-content'),
    updateContent: (updatedContactUsContent: IContactUs): Promise<IContactUs> =>
        requests.put(`/contactus-content/${updatedContactUsContent._id}`, { ...updatedContactUsContent })
};

const submitRequest = {
    getSubumitRequest: () => requests.get('/submitrequest-content'),
    updateContent: (updatedSubmitRequest: ISubmitRequestContent): Promise<ISubmitRequestContent> =>
        requests.put(`/submitrequest-content/${updatedSubmitRequest._id}`, { ...updatedSubmitRequest }),
    getQueries: () => requests.get('/submitrequest'),
    newQuery: (query: ISubmitRequestDto): Promise<ISubmitRequest[]> => requests.postForm('/submitrequest', query),
}

const policy = {
    getPolicy: () => requests.get('/policy'),
    updatePolicy: (updatedPolicy: IPolicy): Promise<IPolicy> =>
        requests.put(`/policy/${updatedPolicy._id}`, { ...updatedPolicy }),
}

export default {
    home,
    user,
    team,
    blog,
    faq,
    contactUs,
    submitRequest,
    policy
};
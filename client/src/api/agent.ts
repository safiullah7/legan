import { AxiosResponse } from 'axios';
import axios from 'axios';
import { IHome } from '../models/home';
import { ILogin, IUser } from '../models/user';
import { AddTeamMember, ITeamMember } from '../models/team';
import { IBlog, IAddBlog } from '../models/blog';

axios.defaults.baseURL = 'http://localhost:1337/api';

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

// axios.interceptors.response.use(undefined, error => { 
//     const history = useHistory();
//     //first param is when successful req, second when promise rejected
//     debugger;
//     if (error.message === 'Network Error' && !error.response) {
//         // toast.error('Network Error - make sure the API is running!');
//     }
//     const {status, data, config} = error.response;
//     if (status === 404) {
//         history.push('/notfound');
//     }
//     if (status === 400 && config.method === 'get' && data.errors.hasOwnProperty('id')) {
//         history.push('/notfound');
//     }
//     if (status === 500) {
//         // toast.error('Server error - check the terminal for more info!');
//     }
//     throw error.response;
// });

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    get:  (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put:  (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del:  (url: string) => axios.delete(url).then(responseBody),
    postForm: (url: string, formObject: any = null) => {
        let formData = new FormData();
        // formData.append('file', file); // key 'File' must match with api method param
        if (formObject !== null) {
            for (const key of Object.keys(formObject)) {
                formData.append(key, formObject[key]);
            }
        }
        return axios.post(url, formData, {
            headers: {'Content-type': 'multipart/form-data'}
        }).then(async () => {
            return await team.getTeam()
        })
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
            headers: {'Content-type': 'multipart/form-data'}
        }).then(async (responseBody) => {
            console.log(responseBody);
            return await blog.getBlogs()
        })
    }
};

const home = {
    getContent: (): Promise<IHome> => requests.get('/home'),
    updateContent: (updatedHomeContent: IHome):Promise<IHome> => 
        requests.put(`/home/${updatedHomeContent._id}`, {...updatedHomeContent})
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
    addTeamMember: (obj: AddTeamMember): Promise<ITeamMember[]> => requests.postForm('/team', obj)
}

const blog = {
    getBlogs: (): Promise<IBlog[]> => requests.get('/blog'),
    getBlog: (_id: string): Promise<IBlog> => requests.get(`/blog/${_id}`),
    saveBlog: (blog: IAddBlog): Promise<IBlog[]> => requests.postBlogForm('/blog', blog),
    updateBlog: (blog: IBlog): Promise<IBlog> => requests.put(`/blog/${blog._id}`, blog),
    deleteBlog: (_id: string): Promise<IBlog> => requests.del(`/blog/${_id}`)
}

export default {
    home,
    user,
    team,
    blog
};
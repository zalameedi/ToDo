import axios, { AxiosResponse } from 'axios'
import { ToDoTask } from '../layout/models/todotask';

axios.defaults.baseURL = 'http://localhost:5001/api';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    //put: (url: string) => axios.put(url).then(responseBody),
    del: <T> (url: string) => axios.delete( url).then(responseBody),
}

const ToDoTasks = {
    list: () => requests.get<ToDoTask[]>('/todotasks'),
    details: (id: string) => requests.get<ToDoTask>(`/todotasks/${id}`),
    create: (todotask: ToDoTask) => requests.post<void>(`/todotasks`, todotask),
    delete: (id: string) => requests.del<void>(`/todotasks/${id}`)
}

const agent = {
    ToDoTasks
}

export default agent; //woooot done.
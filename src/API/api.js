import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '121dd1d2-138c-4345-b64e-b52ee50b2a5a' }
});

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            }); // возвращаем в promise только data с response
    },

    followUsers(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data;
            });
    },

    unfollowUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}


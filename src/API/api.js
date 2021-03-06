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
    },
};

export const authAPI = {

    me() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },

    logout() {
        return instance.delete(`auth/login`);
    }
}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },

    savePhoto(file) {
        let formData = new FormData();
        formData.append('image', file)
        
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    savePofile(profile) {
        return instance.put(`profile`, profile);
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url');
    }
}

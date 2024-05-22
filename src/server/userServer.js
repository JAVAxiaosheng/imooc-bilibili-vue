import http from '@/axios/http'

export default {

    async getResPublicKey() {
        return await http.get('/user/rsa-pks');
    },

    async addUser(params) {
        return http.post('/user/add', params);
    },

    async updateUser(params) {
        return http.put('/user/update', params);
    },

    async logout() {
        return http.delete('/user/delete/double/tokens');
    },
}
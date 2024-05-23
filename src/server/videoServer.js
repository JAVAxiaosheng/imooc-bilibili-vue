import http from '@/axios/http'

export default {
    async uploadFileBySlices(formData) {
        return await http.post('/fast/dfs/upload/appender/file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}
import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8060',
    timeout: 10000
});
// 请求拦截器
http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token && token !== '') {
        config.headers['token'] = token;
    }
    return config;
});

// 响应拦截器
http.interceptors.response.use(function (response) {
    const data = response.data;
    if (data && data.code !== '0') {
        window.alert(data.message);
        throw new Error(data.message);
    }
    return data;
});
export default http;
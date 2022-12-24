import axios from "axios";
const request = axios.create({
    baseURL: "http://127.0.0.1/5000",
    withCredentials: true,// 允许跨域的情况下携带身份凭证,例如：cookie
    timeout: 5000,
});
request.interceptors.request.use((config) => {
    
    return config;
}, error => {
    return Promise.reject(error);
});
request.interceptors.response.use(res => {
    return res.data;
}, error => {
    return Promise.reject(error);
})
export default request;
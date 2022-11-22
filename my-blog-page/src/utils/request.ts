import axios from "axios";
const request = axios.create({
    baseURL: "http://127.0.0.1/5000",
    withCredentials: true,
    timeout: 5000,
});
request.interceptors.request.use((config) => {
    //发送post请求的时候带上token
    if (config.method === "post") {
        
    }
    return config;
}, () => { });
export default request;
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
import store from '@/store'
import "nprogress/nprogress.css"
//start:进度条开始 done：进度条结束
const requests = axios.create({

    baseURL: "/api",
    timeout: 5000
})
//请求拦截器:
requests.interceptors.request.use((config) => {
    //进度条开始动
    nprogress.start();
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //需要携带token带给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    nprogress.start();
    return config;
})

//响应拦截器
requests.interceptors.response.use((res) => {

    nprogress.done();
    return res.data;
}), (error) => {
    return Promise.reject(new Error('faile'))
}

export default requests;
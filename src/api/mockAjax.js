import axios from "axios";
//引入进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css"
//start:进度条开始 done：进度条结束
const requests = axios.create({

    baseURL:"/mock",
    timeout:5000
})
//请求拦截器:
requests.interceptors.request.use((config)=>{
    //进度条开始动
    nprogress.start();
    return config;
})

//响应拦截器
requests.interceptors.response.use((res)=>{

    nprogress.done();
    return res.data;
}),(error)=>{
    return Promise.reject(new Error('faile'))
}

export default requests;
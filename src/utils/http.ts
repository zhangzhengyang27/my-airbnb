import axios,{AxiosRequestConfig,AxiosResponse} from "axios";
import {ElMessage} from "element-plus"

const defaultConfig:AxiosRequestConfig = {
    timeout: 5000,
    baseURL:'/release/'
}

class Http{
    constructor(){
        this.httpInterceptorsRequest();
        this.httpInterceptorsResponse();
    }
    // 实例化 axios
    private static axiosInstance=axios.create(defaultConfig);

    // 请求拦截器
    private httpInterceptorsRequest():void{
        // @ts-ignore
        Http.axiosInstance.interceptors.request.use((config:AxiosRequestConfig)=>{
            return config;
        },(error)=>{
            return Promise.reject(error);
        })
    }

    private httpInterceptorsResponse():void{
        // @ts-ignore
        Http.axiosInstance.interceptors.response.use((response:AxiosResponse)=>{

            // 对响应成功的处理，处理一些接口成功的状态码，比如:2xx范围内的状态码
            const { data } = response
            const { success } = data
            if (success) {
                ElMessage('成功')
            } else {
                ElMessage('失败')
            }
            return response;
        },(error)=>{
            ElMessage('服务器异常')
            return Promise.reject(error);
        })
    }

    public httpRequestGet<T>(url:string,params?:T):Promise<T>{
        return Http.axiosInstance.get(url, { params }).then(res => res.data).catch()
    }

    public httpRequestPost<T>(url: string, params?: T): Promise<T> {
        return Http.axiosInstance.post(url, { params }).then(res => res.data).catch()
    }

}

export const http = new Http();

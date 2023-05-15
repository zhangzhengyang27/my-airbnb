import axios from 'axios'
const defaultConfig={
    timeout: 5000,
    baseURL:'/release/'
}

const axiosInstance=axios.create(defaultConfig)

axiosInstance.interceptors.request.use(config=>{
    return config
},error=>{
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use(response=>{
    return response
})

export default{
    httpGet(url,params){
        return axiosInstance.get(url,{params}).then(res=>{
            return res.data
        }).catch(error=>{})
    },
    httpPost(url,params){
        return axiosInstance.post(url,params).then(res=>{
            return res.data
        }).catch(error=>{})
    }
}

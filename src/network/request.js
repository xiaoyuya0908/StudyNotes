import axios from 'axios'

export function request(config){

//1.创建axios的实例
        const instance = axios.create({
            baseURL:' http://localhost:3000',
            timeout:5000
        })
    //2.axios拦截器
   instance.interceptors.request.use(config =>{
       //成功
       return config
   },err =>{
       //失败
       console.log(err)
   })


    //拦截响应的
     instance.interceptors.response.use(res =>{
         return res.data
     },err =>{
         console.log(err)
     })


        //3.发送真正网络请求
        return  instance(config)
}




// export function request(config){
//     return new Promise((resolve,reject)=>{
// //1.创建axios的实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//
//     //发送真正网络请求
//     instance(config)
//         .then(res =>{
//             // console.log(res);
//             resolve(res)
//         })
//         .catch(err =>{
//             // console.log(err);
//            reject(err)
//         })
//     })
// }


// export function request(config,success,failure){
// //1.创建axios的实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//
//     //发送真正网络请求
//     instance(config)
//         .then(res =>{
//             // console.log(res);
//             success(res)
//         })
//         .catch(err =>{
//             // console.log(err);
//             failure(err)
//         })
// }
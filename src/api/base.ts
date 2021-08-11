

import axios, { AxiosRequestConfig } from "axios";
export const baseurl = "https://api-dev.domecompass.com";



export const LS_LOGIN_TOKEN="login_token";
axios.interceptors.request.use((config) =>{
const token=localStorage.getItem(LS_LOGIN_TOKEN);
if (!token){
return config;
}
return {...config, headers:{...config.headers, Authorization:token }}
}
)
axios.interceptors.response.use(undefined,(error)=>{
  if(error.response && error.response.data.code===9101){
    localStorage.removeItem(LS_LOGIN_TOKEN);

window.location.href="/login";
  }
  return Promise.reject(error
    
    
    
    
    );
});

export const get =<T> (url:string ,config?:AxiosRequestConfig)=>{
  const source=axios.CancelToken.source();
  const response:any=axios.get<T>(url,{...config,cancelToken:source.token})
response.myCanceler=source.cancel;
return response;
    }
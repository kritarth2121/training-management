import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}
interface User{

}
const LS_LOGIN_TOKEN="login_token";
axios.interceptors.request.use((config) =>{
const token=localStorage.getItem(LS_LOGIN_TOKEN);
if (!token){
return config;
}
return {...config, headers:{...config.headers, Authorization:token }}
}
)
axios.interceptors.response.use(undefined,(error)=>{
  if(error.response.data.code==9101){

  }
})
interface LoginResponse{
data:{
  is_2fa_enabled:false;
},
token:string;
user:User;
}
const baseurl = "https://api-dev.domecompass.com";
export const login = (data: LoginData) => {
  const url = baseurl + "/login";
  console.log(data,555);
  axios.post<LoginResponse>(url,data).then((response)=>{
    console.log(response);
    localStorage.setItem("login_token",response.data.token);
  })
};
interface GroupRequest{
  limit?:number;
query?:string;
  offset?:number;
status?:"all-groups"|"favourite"|"archievedf"
}
export const fetchGroups =(data?:GroupRequest)=>{
  const url=baseurl+"/groups";
  const token=localStorage.getItem(LS_LOGIN_TOKEN);
  axios.get(url,{params:data,headers:{Authorization:token}})
  .then((data)=>{
    console.log(data);
return data;
  })
}
export const logout=()=>{
  localStorage.removeItem(LS_LOGIN_TOKEN);
}
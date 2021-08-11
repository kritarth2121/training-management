import axios, { CancelToken } from "axios";
import { baseurl, LS_LOGIN_TOKEN } from "./base";

export const fetchGroups =(data:GroupRequest,toke?:CancelToken)=>{
    const url=baseurl+"/groups";
    const token=localStorage.getItem(LS_LOGIN_TOKEN);
    return axios.get(url,{cancelToken:toke, params:data,headers:{Authorization:token}})
    
  }
  export interface GroupRequest{
    limit?:number;
  query?:string;
    offset?:number;
  status?:"all-groups"|"favourite"|"archieved"
  }

  export const fetchGroupsid =(data:{id:number})=>{
    const url=baseurl+"/groups/"+ data.id ;
    const token=localStorage.getItem(LS_LOGIN_TOKEN);
    return axios.get(url,{headers:{Authorization:token}})
    
  }
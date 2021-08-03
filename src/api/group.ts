import axios from "axios";
import { baseurl, LS_LOGIN_TOKEN } from "./base";

export const fetchGroups =(data:GroupRequest)=>{
    const url=baseurl+"/groups";
    const token=localStorage.getItem(LS_LOGIN_TOKEN);
    return axios.get(url,{params:data,headers:{Authorization:token}})
    
  }
  interface GroupRequest{
    limit?:number;
  query?:string;
    offset?:number;
  status?:"all-groups"|"favourite"|"archievedf"
  }
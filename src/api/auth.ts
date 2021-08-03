import axios from "axios";
import { User } from "../models/User";
import { baseurl, LS_LOGIN_TOKEN } from "./base";

export const logout=()=>{
    console.log("logout")
    localStorage.removeItem(LS_LOGIN_TOKEN);
    window.location.href="/login";
  
  }

  interface MeResponse {
    data: User;
  }
  export const me = () => {
    const url = baseurl + "/me";
    return axios.get<MeResponse>(url).then((response) => response.data.data);
  };
  interface LoginResponse{
    data:{
      is_2fa_enabled:false;
    },
    token:string;
    user:User;
    }
    interface LoginData {
        email: string;
        password: string;
      }
    export const login = (data: LoginData) => {
      const url = baseurl + "/login";
      console.log(data,555);
      return axios.post<LoginResponse>(url,data).then((response)=>{
        console.log(response);
        localStorage.setItem("login_token",response.data.token);
        window.location.href="/";
        return response.data.user
    
      })
    };
    
    
    
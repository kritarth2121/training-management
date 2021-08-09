import axios from "axios";
import { User } from "../models/User";
import { baseurl, LS_LOGIN_TOKEN } from "./base";
const token=localStorage.getItem(LS_LOGIN_TOKEN);

export const logout = () => {
    console.log("logout");
    localStorage.removeItem(LS_LOGIN_TOKEN);
    window.location.href = "/login";
};
export const updateUser = (data: User|undefined) => {
    const url = baseurl + "/me";
console.log(data,"final");
    return axios
        .put(url, data,{headers:{Authorization:token}})
        .then((response) => {
            console.log(response,"hua ki nahi");
        })
        .catch((err) => {
            console.log(err,222222222222222);
        });
};
interface MeResponse {
    data: User;
}
export const me = () => {
    const url = baseurl + "/me";
    return axios.get<MeResponse>(url).then((response) => response.data.data);
};
interface LoginResponse {
    data: {
        is_2fa_enabled: false;
    };
    token: string;
    user: User;
}
interface LoginData {
    email: string;
    password: string;
}
export const login = (data: LoginData) => {
    const url = baseurl + "/login";
    console.log(data, 555);
    return axios.post<LoginResponse>(url, data).then((response) => {
        console.log(response);
        localStorage.setItem("login_token", response.data.token);
        window.location.href = "/";
        return response.data.user;
    });
};

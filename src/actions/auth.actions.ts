import { bindActionCreators } from "redux";
import { User } from "../models/User";
import { store } from "../store";
import { ME_FETCH, ME_LOGIN } from "./action.constants";

export const mefetch =(u:User)=> ({type:ME_FETCH, payload:u})
export const melogin =(u:User)=> ({type:ME_LOGIN, payload:u})

export const authAction=bindActionCreators({
    fetch:mefetch,
    login:melogin
},store.dispatch)
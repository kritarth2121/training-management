

import {authAction} from "../actions/auth.actions";
import {me as meAPI} from "../api/auth"
export const me=()=>{
    //authAction.fetching();
    meAPI().then((u)=> authAction.fetch(u))
}
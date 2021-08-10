import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUPS_QUERY, GROUPS_FETCH } from "./action.constants";
export const groupAction =(query:string,loading:boolean)=> ({type:GROUPS_QUERY, payload:{query,loading}})

export const groupquery =(query:string)=> ({type:GROUPS_QUERY, payload:query})
export const groupsfetch =( groups: Group[], query: string)=> ({type:GROUPS_FETCH, payload:{groups,query}})

export const groupActions=bindActionCreators({
    groupsfetch:groupsfetch,
    groupquery:groupquery,
    groupAction:groupAction
},store.dispatch)
import { call, put, takeEvery } from "@redux-saga/core/effects";
import {  AnyAction } from "redux";
import { GROUPS_QUERY } from "../actions/action.constants";
import { groupActions } from "../actions/group.actions";
import { fetchGroups as fetchGroupsAPI } from "../api/group";
export function* fetchGroups(action:AnyAction): Generator<any>{
//    const groups :any= yield call(fetchGroupsAPI,{
//        query :action.payload,
//        status:"all-groups",
//    });
//    yield put(groupActions.groupsfetch(action.payload ,groups))
   yield 10;
}
export function* wathchGroupQueryChanged(){
    console.log("watch Group Query Changed");
    yield takeEvery(GROUPS_QUERY,fetchGroups)
}

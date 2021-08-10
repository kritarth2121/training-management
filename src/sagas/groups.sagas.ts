import { takeEvery } from "@redux-saga/core/effects";
import { Action, AnyAction } from "redux";
import { GROUPS_QUERY } from "../actions/action.constants";
export function* fetchGroups(){
   yield 10;
}
export function* wathchGroupQueryChanged(){
    console.log("watch Group Query Changed");
    yield takeEvery(GROUPS_QUERY,fetchGroups)
}

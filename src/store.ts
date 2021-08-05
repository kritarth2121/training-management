import { TypedUseSelectorHook, useSelector } from "react-redux";
import {  combineReducers, createStore } from "redux";
import { User } from "./models/User";
import { authReducer } from "./reducers/authReducer";
import {groupReducer} from "./reducers/groupsReducer";
import {userReducer} from "./reducers/userReducer";


const reducer = combineReducers( {
 group:groupReducer,
 user:userReducer,
 auth:authReducer
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const meFetchAction = (u: User) => ({ type: "me/fetch", payload: u });
export type AppState= ReturnType<typeof reducer>
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

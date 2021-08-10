import { TypedUseSelectorHook, useSelector } from "react-redux";
import {  applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { User } from "./models/User";
import { authReducer } from "./reducers/authReducer";
import {groupReducer} from "./reducers/groupsReducer";
import {userReducer} from "./reducers/userReducer";
import { wathchGroupQueryChanged } from "./sagas/groups.sagas";


const reducer = combineReducers( {
 group:groupReducer,
 user:userReducer,
 auth:authReducer
});
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(wathchGroupQueryChanged);
export const meFetchAction = (u: User) => ({ type: "me/fetch", payload: u });
export type AppState= ReturnType<typeof reducer>
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

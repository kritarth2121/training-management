import { AppState } from "../store";

export const groupStateSelector=(state:AppState)=>state.group;
export const userStateSelector=(state:AppState)=>state.user;
export const authStateSelector=(state:AppState)=>state.auth;



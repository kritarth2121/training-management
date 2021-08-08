import { AppState } from "../store";

export const meSelector =(state: AppState)=>
    state.auth.id===undefined ? undefined:state.user.byID[state.auth.id]
    

import { AnyAction } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/action.constants";
import { EntityState } from "./entity.reducer";

export interface UserState extends EntityState{
  
}
const initialState: UserState = {
  byID:{}
};

export const userReducer = (state = initialState, action: AnyAction) => {
  const user=action.payload
  switch (action.type) {
    
    case ME_FETCH:
    case ME_LOGIN:
      return { ...state, byID:{...state.byID ,[user.id] :user } };// eslint-disable-line
      default:
        return state;
  }
};

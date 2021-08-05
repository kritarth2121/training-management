import { User } from "../models/User";
import { AnyAction } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/action.constants";

export interface UserState {
  me?: User;
}
const initialState: UserState = {
  me: undefined,
};

export const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...state, me: action.payload };
      default:
        return state;
  }
};

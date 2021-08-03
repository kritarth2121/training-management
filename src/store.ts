import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";
export interface AppState {
  me?: User;
  groups: Group[];
  isSidebarOpen: boolean;
  groupQuery: string;
  groupIds: { [id: number]: Group };
  groupQueryMap: { [query: string]: number[] };
}
const initialState: AppState = {
  me: undefined,
  groups: [],
  isSidebarOpen: true,
  groupQuery: "",
  groupIds: {},
  groupQueryMap: {},
};
let UI_SIDEBAR_TOGGLE = "sidebar";
const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "me/fetch":
    case "me/login":
      return { ...state, me: action.payload };
    case UI_SIDEBAR_TOGGLE:
      return { ...state, isSidebarOpen: action.payload };
    case "groups/query":
      return { ...state, groupQuery: action.payload };
    case "groups/query_completed":
      const groups = action.payload.groups.data.data as Group[];
      console.log(groups);

      const groupIds = groups.map((g) => 
        g.id
      );
      console.log(groups, groupIds);
      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});

      return {
        ...state,
        groupQueryMap: { ...state.groupQueryMap, [state.groupQuery]: groupIds },
        groups: { ...state.groups, ...groupMap },
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const meFetchAction = (u: User) => ({ type: "me/fetch", payload: u });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

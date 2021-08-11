import { AnyAction } from "redux";
import { GROUPS_FETCH, GROUPS_QUERY } from "../actions/action.constants";
import { Group } from "../models/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";
export interface GroupState extends EntityState {
    query: string;
    loadingQuery: {[query: string]: boolean};
    
    //loadingQuery:{[query:string]:boolean};
    //groupIds: { [id: number]: Group };
    queryMap: {[query: string]: number[] };
}
const initialState: GroupState = {
byID: {},
  query: "",
  queryMap: {},
  loadingQuery:{},

};
export const groupReducer  = (state = initialState, action: AnyAction)=> {
    switch (action.type) {
        case GROUPS_QUERY:
            return { ...state, query: action.payload ,loadingQuery:{...state.loadingQuery , [action.payload.query] :action.payload.loading}};
        case GROUPS_FETCH:
            const groups = action.payload.groups.data as Group[];
            console.log(groups,"hoega");

            const groupIds = getIds(groups);
            console.log(groups, groupIds);
            const groupMap = addMany(state,groups);

            return {
                ...groupMap,
                queryMap:{ ...state.queryMap,
                    [action.payload.query] : groupIds
                },
                loadingQuery:{ ...state.loadingQuery,[action.payload.query]: false}
            };
        default:
            return state;
    }
};

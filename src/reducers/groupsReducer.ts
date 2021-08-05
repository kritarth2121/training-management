import { AnyAction } from "redux";
import { GROUPS_FETCH, GROUPS_QUERY } from "../actions/action.constants";
import { Group } from "../models/Group";
export interface GroupState {
    groups: Group[];
    groupQuery: string;
    groupIds: { [id: number]: Group };
    groupQueryMap: { [query: string]: number[] };
}
const initialState: GroupState = {
    groups: [],
    groupQuery: "",
    groupIds: {},
    groupQueryMap: {},
};
export const groupReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case GROUPS_QUERY:
            return { ...state, groupQuery: action.payload };
        case GROUPS_FETCH:
            const groups = action.payload.groups.data as Group[];
            console.log(groups);

            const groupIds = groups.map((g) => g.id);
            console.log(groups, groupIds);
            const groupMap = groups.reduce((prev, group) => {
                return { ...prev, [group.id]: group };
            }, {});

            return {
                ...state,
                groupQueryMap: {
                    ...state.groupQueryMap,
                    [state.groupQuery]: groupIds,
                },
                groups: { ...state.groups, ...groupMap },
            };
        default:
            return state;
    }
};

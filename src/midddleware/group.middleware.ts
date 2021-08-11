import { groupActions } from "../actions/group.actions";
import { fetchGroups, GroupRequest } from "../api/group";
import { Group } from "../models/Group";
import { groupQueryMapSelector } from "../selectors/groups.selector";
import { store } from "../store";

export const fetchgroups = (request: GroupRequest) => {
    const query = request.query;
    //const state=store.getState();
    //const queryMap = groupQueryMapSelector(store.getState());

    // const groupIDS = queryMap[query!];
    // groupActions.groupAction(query!, !groupIDS);
    // const queryloading=groupQueryLoading(state);
    const loading = groupLoading[query]
    // const tokenSource = axios.CancelToken.source();
    // cancelationTokenSources[query] = tokenSource;
    groupActions.query(query);
    if (loading) {
        return;
    }
    fetchGroups(request).then((groups) => {
        const a = (groups as unknown) as Group[];
        console.log(a);
        groupActions.groupsfetch(a.data, query!);
        //cancelationTokenSources[query] = undefined;
    });
};

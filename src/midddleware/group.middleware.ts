import axios, { Canceler } from "axios";
import { groupActions } from "../actions/group.actions";
import { fetchGroups, GroupRequest } from "../api/group";
let canceler: Canceler | undefined;
export const fetchgroups = (request: GroupRequest) => {
    const query = request.query;
    //const queryMap = groupQueryMapSelector(store.getState());
    //const groupIDS = queryMap[query!];
    //groupActions.groupAction(query!, !groupIDS);
    //const queryloading=groupQueryLoading(state);
    //const loading = groupLoading(store.getState());
    //const tokenSource = axios.CancelToken.source();
    //cancelationTokenSources[query] = tokenSource;
    groupActions.groupquery(query!);
    canceler && canceler();
    const { cancel, token } = axios.CancelToken.source();

    canceler = cancel;

    fetchGroups(request, token).then((groups) => {
        const a = groups;
        console.log(a, "Idhara aaya");
        groupActions.groupsfetch(a.data, query!);
        canceler = undefined;
    });
};

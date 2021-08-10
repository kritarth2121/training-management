import axios from "axios";
import { groupaction } from "../actions/group.actions";
import { fetchGroups } from "../api/group";
import { store } from "../store";


export const fetchgroups = (request: GroupRequest) => {
    const query = request.query;
    const state=store.getState();
    groupaction.groupquery(query);
    const queryloading=groupQueryLoading(state);
    const loading = query.loading;
    const tokenSource = axios.CancelToken.source();
    cancelationTokenSources[query] = tokenSource;

    fetchGroups(
        request.then((groups) => {
            groupaction.groupsfetch(query, groups);
            cancelationTokenSources[query] = undefined;
        })
    );
};

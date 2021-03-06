import { createSelector } from "reselect";
import { store } from "../store";
import { groupStateSelector } from "./app.selectors";
// export const groupQuerySelector =createSelector([groupStateSelector],
//     (groupState)=>groupState.query);
    
//     )


// eslint-disable-next-line @typescript-eslint/no-use-before-define
// export const groupByIdSelector=(state:AppState)=>{
//     const groupState=groupStateSelector(state);
//     return groupState.groupIds;
// }
export const groupByIdSelector=createSelector(
    [groupStateSelector],
    (groupState:any)=>groupState.byID
)

// export const groupQueryMapSelector=(state:AppState)=>{
//     const groupState=groupStateSelector(state);
//     return groupState.groupQueryMap;
// }
export const groupQueryMapSelector=createSelector(
    [groupStateSelector],
    (groupState:any)=>groupState.queryMap 
)

export const groupLoadingSelector =createSelector(
    [groupStateSelector],
    (groupState:any)=>groupState.loadingQuery
)

export const groupQuerySelector =createSelector(
    [groupStateSelector],
    (groupState:any)=>groupState.query 
)
export const groupLoading=createSelector([groupLoadingSelector,groupQuerySelector],
    (loading :any,query:string)=> {
        // eslint-disable-next-line
        return loading[query]  ;

    }
    
    );
// export const groupSelector =(state: AppState)=>{
//     const groupIds=state.groups.queryMap[state.groups.query] || [];
//     const groupState=groupStateSelector(state);
//     const groups =groupIds.ap((id)=> groupState.byId[id]);
//     return groups;
// }
export const groupSelector =createSelector([groupQuerySelector,groupByIdSelector,groupQueryMapSelector],(query,byId,queryMap)=>{
    const groupIds=queryMap[query] || [];
    console.log("Selector",groupIds);
    const groups=groupIds.map((id:any)=>byId[id]);
    return groups;
    })

// const groupLoadingQuerySeletor = createSelector([groupStateSelector],(groupState)=>(query,loadingMap)=>loadingMap[query] );
// const groupLoadingSelector=createSelector([groupStateSelector])
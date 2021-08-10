import { Entity } from "../models/Entity";
import { User } from "../models/User";

export interface EntityState {
    byID: {
        [id: number]: User;
    };
}
export const addMany = (state: EntityState, entities: Entity[]) => {
    const entityMap = entities.reduce((prev, entity) => {
        return { ...prev, [entity.id]: entity };
    }, {});

    return {
        ...state,
        byID: { ...state.byID, ...entityMap },
    };
};
export const addOne = (state: EntityState, entity: Entity) => {
    return { ...state, byID: { ...state.byID, [entity.id]: entity } };
};
export const getIds = (entities: Entity[]) => {
    return entities.map((e) => e.id);
};

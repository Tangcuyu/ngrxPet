import { PetTag, initialTag } from './pet-tag.model';
import * as PetTagAction from './pet-tag.actions';


export function petTagReducer(state: PetTag = initialTag, action: PetTagAction.ActionsUnion) {
    switch (action.type) {
        case PetTagAction.ActionTypes.SelectShape:
            return {
                ...state,
                shape: action.payload,
            };
        case PetTagAction.ActionTypes.AddText:
            return {
                ...state,
                text: action.payload,
            };
        case PetTagAction.ActionTypes.SelectFont:
            return {
                ...state,
                font: action.payload,
            };
        case PetTagAction.ActionTypes.ToggleClip:
            return {
                ...state,
                clip: !state.clip,
            };
        case PetTagAction.ActionTypes.ToggleGems:
            return {
                ...state,
                gems: !state.gems,
            };
        case PetTagAction.ActionTypes.Complete:
            return {
                ...state,
                complete: action.payload,
            };
        case PetTagAction.ActionTypes.Reset:
            return action.payload;
        default:
            return state;
    }
}

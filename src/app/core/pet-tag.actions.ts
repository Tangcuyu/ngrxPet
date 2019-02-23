import { Action } from '@ngrx/store';
import { PetTag } from './pet-tag.model';

export enum ActionTypes {
    SelectShape = 'SELECT_SHAPE',
    AddText = 'ADD_TEXT',
    ToggleClip = 'TOGGLE_CLIP',
    ToggleGems = 'TOGGLE_GEMS',
    SelectFont = 'SELECT_FONT',
    Complete = 'COMPLETE',
    Reset = 'RESET',
}

export class SelectShape implements Action {
    readonly type = ActionTypes.SelectShape;

    constructor(public payload: string) { }
}

export class AddText implements Action {
    readonly type = ActionTypes.AddText;

    constructor(public payload: string) { }
}

export class ToggleClip implements Action {
    readonly type = ActionTypes.ToggleClip;

    constructor(public payload: boolean) { }
}

export class ToggleGems implements Action {
    readonly type = ActionTypes.ToggleGems;

    constructor(public payload: boolean) { }
}

export class SelectFont implements Action {
    readonly type = ActionTypes.SelectFont;

    constructor(public payload: string) { }
}

export class Complete implements Action {
    readonly type = ActionTypes.Complete;

    constructor(public payload: boolean) { }
}

export class Reset implements Action {
    readonly type = ActionTypes.Reset;

    constructor(public payload: PetTag) { }
}


export type ActionsUnion = SelectShape | AddText | ToggleClip | ToggleGems | SelectFont | Complete  | Reset;

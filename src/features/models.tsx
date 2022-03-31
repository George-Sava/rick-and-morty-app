import { Dispatch } from "@reduxjs/toolkit";

export interface CharacterModel 
{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginModel;
    location: LocationModel;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface LocationModel 
{
    name: string;
    url: string;
}

export interface OriginModel
{
    name: string;
    url: string;
}

export interface Status {
    alive: boolean;
    dead: boolean;
    unknown: boolean;
}

export interface Gender {
    female: boolean;
    male: boolean;
    genderless : boolean;
    unknown: boolean;
}

export interface OptionList {
    status: Status;
    name:boolean;
    species: boolean;
    type: boolean;
    gender: Gender;
}

export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface CharacterList {
    info: Info;
    results: CharacterModel[];
}

export interface UrlParameter {
    name: string;
    value: string;
}

export interface ActiveOptions {
    firstParameter: UrlParameter;
    secondParameter: UrlParameter;
}

export interface QueryData{
    query: string;
    url: string;
}



type AsyncThunkConfig = {
    /** return type for `thunkApi.getState` */
    state?: unknown
    /** type for `thunkApi.dispatch` */
    dispatch?: Dispatch
    /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
    extra?: unknown
    /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
    rejectValue?: unknown
    /** return type of the `serializeError` option callback */
    serializedErrorType?: unknown
    /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
    pendingMeta?: unknown
    /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
    fulfilledMeta?: unknown
    /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
    rejectedMeta?: unknown
  }
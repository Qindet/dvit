import {Action} from "redux";
import { LoadingStatus } from "../interfaces/general";
import { IDvit } from "../interfaces/dvits-state";

export enum DvitActionsType {
    FETCH_DVIT_LOADED  = 'dvit/FETCH_DVIT_LOADED',
    FETCH_DVIT_REQUESTED  = 'dvit/FETCH_DVIT_REQUESTED',
    SET_LOADING_STATUS = 'dvit/SET_LOADING_STATUS'
}

export interface IFetchDvitLoadedAction extends Action<DvitActionsType>{
    type: DvitActionsType.FETCH_DVIT_LOADED,
    dvit: IDvit | null
}
export interface IFetchDvitRequestedAction extends Action<DvitActionsType>{
    type: DvitActionsType.FETCH_DVIT_REQUESTED,
    id: string
}
export interface ISetDvitLoadingStatusAction extends Action<DvitActionsType>{
    type: DvitActionsType.SET_LOADING_STATUS,
    loadingStatus: LoadingStatus
}

export const fetchDvitLoaded = (dvit: IDvit | null): IFetchDvitLoadedAction => ({
    type: DvitActionsType.FETCH_DVIT_LOADED,
    dvit
})
export const fetchDvitRequested = (id:string): IFetchDvitRequestedAction => ({
    type: DvitActionsType.FETCH_DVIT_REQUESTED,
    id
})
export const setDvitLoadingStatus = (loadingStatus: LoadingStatus): ISetDvitLoadingStatusAction => ({
    type: DvitActionsType.SET_LOADING_STATUS,
    loadingStatus
})

export type DvitActions = IFetchDvitLoadedAction | IFetchDvitRequestedAction | ISetDvitLoadingStatusAction
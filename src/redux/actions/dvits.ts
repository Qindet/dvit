import {IDvit} from "../interfaces/dvits-state";
import {Action} from "redux";
import { LoadingStatus } from "../interfaces/general";

export enum DvitsActionsType {
    FETCH_DVITS_LOADED  = 'dvits/FETCH_DVITS_LOADED',
    FETCH_DVITS_REQUESTED  = 'dvits/FETCH_DVITS_REQUESTED',
    SET_LOADING_STATUS = 'dvits/SET_LOADING_STATUS'
}

export interface IFetchDvitsLoadedAction extends Action<DvitsActionsType>{
    type: DvitsActionsType.FETCH_DVITS_LOADED,
    dvits: Array<IDvit>
}
export interface IFetchDvitsRequestedAction extends Action<DvitsActionsType>{
    type: DvitsActionsType.FETCH_DVITS_REQUESTED
}
export interface ISetDvitsLoadingStatusAction extends Action<DvitsActionsType>{
    type: DvitsActionsType.SET_LOADING_STATUS,
    loadingStatus: LoadingStatus
}

export const fetchDvitsLoaded = (dvits: Array<IDvit>): IFetchDvitsLoadedAction => ({
    type: DvitsActionsType.FETCH_DVITS_LOADED,
    dvits
})
export const fetchDvitsRequested = (): IFetchDvitsRequestedAction => ({
    type: DvitsActionsType.FETCH_DVITS_REQUESTED
})
export const setDvitsLoadingStatus = (loadingStatus: LoadingStatus): ISetDvitsLoadingStatusAction => ({
    type: DvitsActionsType.SET_LOADING_STATUS,
    loadingStatus
})

export type DvitsActions = IFetchDvitsLoadedAction | IFetchDvitsRequestedAction | ISetDvitsLoadingStatusAction
import {IDvit} from "../interfaces/dvits-state";
import {Action} from "redux";
import { LoadingStatus } from "../interfaces/general";

export enum DvitsActionsType {
    FETCH_DVITS_LOADED  = 'dvits/FETCH_DVITS_LOADED',
    FETCH_DVITS_REQUESTED  = 'dvits/FETCH_DVITS_REQUESTED',
    SET_LOADING_STATUS = 'dvits/SET_LOADING_STATUS',
    ADD_DVIT_LOADED  = 'dvits/ADD_DVIT_LOADED',
    ADD_DVIT_REQUESTED  = 'dvits/ADD_DVIT_REQUESTED',
    SET_LOADING_ADD_DVIT_STATUS = 'dvits/SET_LOADING_ADD_DVIT_STATUS'
}
// Fetch dvits I
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
// Add dvit I
export interface IAddDvitLoadedAction extends Action<DvitsActionsType>{
    type: DvitsActionsType.ADD_DVIT_LOADED,
    dvit: IDvit
}
export interface IAddDvitRequestedAction extends Action<DvitsActionsType>{
    type: DvitsActionsType.ADD_DVIT_REQUESTED,
    text: string
}
export interface ISetAddDvitLoadingStatusAction extends Action<DvitsActionsType>{
    type: DvitsActionsType.SET_LOADING_ADD_DVIT_STATUS,
    loadingAddDvitStatus: LoadingStatus
}
// fetch Action Creators
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
// add Dvit Action Creators
export const addDvitLoaded = (dvit: IDvit): IAddDvitLoadedAction => ({
    type: DvitsActionsType.ADD_DVIT_LOADED,
    dvit
})
export const addDvitRequested = (text: string): IAddDvitRequestedAction => ({
    type: DvitsActionsType.ADD_DVIT_REQUESTED,
    text
})
export const setAddDvitLoadingStatus = (loadingAddDvitStatus: LoadingStatus): ISetAddDvitLoadingStatusAction => ({
    type: DvitsActionsType.SET_LOADING_ADD_DVIT_STATUS,
    loadingAddDvitStatus
})
//
export type DvitsActions = IFetchDvitsLoadedAction | IFetchDvitsRequestedAction | ISetDvitsLoadingStatusAction |
    IAddDvitRequestedAction | IAddDvitLoadedAction | ISetAddDvitLoadingStatusAction
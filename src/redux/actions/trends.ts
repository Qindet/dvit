import {Action} from "redux";
import {ITrend} from "../interfaces/trends-state";
import { LoadingStatus } from "../interfaces/general";

export enum TrendsActionsType {
    FETCH_TRENDS_LOADED  = 'trends/FETCH_DVITS_LOADED',
    FETCH_TRENDS_REQUESTED  = 'trends/FETCH_DVITS_REQUESTED',
    SET_LOADING_STATUS = 'trends/SET_LOADING_STATUS'
}

export interface IFetchTrendsLoadedAction extends Action<TrendsActionsType>{
    type: TrendsActionsType.FETCH_TRENDS_LOADED,
    trends: Array<ITrend>
}
export interface IFetchTrendsRequestedAction extends Action<TrendsActionsType>{
    type: TrendsActionsType.FETCH_TRENDS_REQUESTED
}
export interface ISetTrendsLoadingStatusAction extends Action<TrendsActionsType>{
    type: TrendsActionsType.SET_LOADING_STATUS,
    loadingStatus: LoadingStatus
}

export const fetchTrendsLoaded = (trends: Array<ITrend>): IFetchTrendsLoadedAction => ({
    type: TrendsActionsType.FETCH_TRENDS_LOADED,
    trends
})
export const fetchTrendsRequested = (): IFetchTrendsRequestedAction => ({
    type: TrendsActionsType.FETCH_TRENDS_REQUESTED
})
export const setTrendsLoadingStatus = (loadingStatus: LoadingStatus): ISetTrendsLoadingStatusAction => ({
    type: TrendsActionsType.SET_LOADING_STATUS,
    loadingStatus
})

export type TrendsActions = IFetchTrendsLoadedAction | IFetchTrendsRequestedAction | ISetTrendsLoadingStatusAction
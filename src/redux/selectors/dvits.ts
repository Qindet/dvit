import {AppStateType} from "../reducers";
import {IDvit} from "../interfaces/dvits-state";
import { LoadingStatus } from "../interfaces/general";

export const selectDvits = (state: AppStateType): Array<IDvit> => state.dvitsReducer.dvits
export const selectLoadingStatus = (state: AppStateType) => state.dvitsReducer.loadingStatus
export const isDvitsLoadingStatus = (state: AppStateType):boolean => state.dvitsReducer.loadingStatus === LoadingStatus.LOADING
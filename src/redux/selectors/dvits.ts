import {AppStateType} from "../reducers";
import {IDvit} from "../interfaces/dvits-state";
import { LoadingStatus } from "../interfaces/general";

export const selectDvits = (state: AppStateType): Array<IDvit> => state.dvitsReducer.dvits
export const isDvitsLoadingStatus = (state: AppStateType):boolean => state.dvitsReducer.loadingStatus === LoadingStatus.LOADING

export const selectIsAddDvitLoadingStatus = (state: AppStateType): boolean => state.dvitsReducer.loadingAddDvitStatus === LoadingStatus.LOADING
export const selectIsAddDvitHasError = (state: AppStateType): boolean => state.dvitsReducer.loadingAddDvitStatus === LoadingStatus.FAILED

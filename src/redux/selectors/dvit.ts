import {AppStateType} from "../reducers";
import {IDvit} from "../interfaces/dvits-state";
import { LoadingStatus } from "../interfaces/general";

export const selectDvit = (state: AppStateType): IDvit | null => state.dvitReducer.dvit
export const isDvitLoadingStatus = (state: AppStateType):boolean => state.dvitReducer.loadingStatus === LoadingStatus.LOADING
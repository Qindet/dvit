import {AppStateType} from "../reducers";
import {ITrend} from "../interfaces/trends-state";
import {LoadingStatus} from "../interfaces/general";


export const selectTrends = (state: AppStateType): Array<ITrend> => state.trendsReducer.trends
export const isTrendsLoadingStatus = (state: AppStateType):boolean => state.trendsReducer.loadingStatus === LoadingStatus.LOADING

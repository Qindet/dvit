import {ITrendsState,} from "../interfaces/trends-state";
import {TrendsActions, TrendsActionsType} from "../actions/trends";
import {LoadingStatus} from "../interfaces/general";


const initialState: ITrendsState = {
    trends: [],
    loadingStatus:LoadingStatus.NEVER
}

export default function trendsReducer(state=initialState,action:TrendsActions) {
    switch (action.type) {
        case TrendsActionsType.FETCH_TRENDS_REQUESTED:
            return {
                ...state,
                trends: [],
                loadingStatus: LoadingStatus.LOADING
            }
        case TrendsActionsType.FETCH_TRENDS_LOADED:
            return {
                ...state,
                trends: action.trends,
                loadingStatus: LoadingStatus.LOADED
            }
        case TrendsActionsType.SET_LOADING_STATUS:
            return {
                ...state,
                loadingStatus: action.loadingStatus
            }
        default:
            return state
    }
}
import {IDvitsState} from "../interfaces/dvits-state";
import {DvitsActions, DvitsActionsType} from "../actions/dvits";
import { LoadingStatus } from "../interfaces/general";


const initialState: IDvitsState = {
    dvits: [],
    loadingStatus:LoadingStatus.NEVER
}

export default function dvitsReducer(state=initialState,action:DvitsActions) {
    switch (action.type) {
        case DvitsActionsType.FETCH_DVITS_REQUESTED:
            return {
                ...state,
                dvits: [],
                loadingStatus: LoadingStatus.LOADING
            }
        case DvitsActionsType.FETCH_DVITS_LOADED:
            return {
                ...state,
                dvits: action.dvits,
                loadingStatus: LoadingStatus.LOADED
            }
        case DvitsActionsType.SET_LOADING_STATUS:
            return {
                ...state,
                loadingStatus: action.loadingStatus
            }
        default:
            return state
    }
}
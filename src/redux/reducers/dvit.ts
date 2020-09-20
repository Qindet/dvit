import {IDvitState} from "../interfaces/dvit-state";
import {DvitActions, DvitActionsType} from "../actions/dvit";
import { LoadingStatus } from "../interfaces/general";


const initialState: IDvitState = {
    dvit: null,
    loadingStatus:LoadingStatus.NEVER
}

export default function dvitReducer(state=initialState,action:DvitActions) {
    switch (action.type) {
        case DvitActionsType.FETCH_DVIT_REQUESTED:
            return {
                ...state,
                dvit: null,
                loadingStatus: LoadingStatus.LOADING
            }
        case DvitActionsType.FETCH_DVIT_LOADED:
            return {
                ...state,
                dvit: action.dvit,
                loadingStatus: LoadingStatus.LOADED
            }
        case DvitActionsType.SET_LOADING_STATUS:
            return {
                ...state,
                loadingStatus: action.loadingStatus
            }
        default:
            return state
    }
}
import {IDvitsState} from "../interfaces/dvits-state";
import {DvitsActions, DvitsActionsType} from "../actions/dvits";
import {LoadingStatus} from "../interfaces/general";


const initialState: IDvitsState = {
    dvits: [],
    loadingStatus:LoadingStatus.NEVER,
    loadingAddDvitStatus:LoadingStatus.NEVER
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
        case DvitsActionsType.ADD_DVIT_REQUESTED:
            return {
                ...state,
                loadingAddDvitStatus: LoadingStatus.LOADING
            }
        case DvitsActionsType.ADD_DVIT_LOADED:
            return {
                ...state,
                dvits: [action.dvit,...state.dvits],
                loadingAddDvitStatus: LoadingStatus.LOADED
            }
        case DvitsActionsType.SET_LOADING_ADD_DVIT_STATUS:
            return {
                ...state,
                loadingAddDvitStatus: action.loadingAddDvitStatus
            }
        default:
            return state
    }
}
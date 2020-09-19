import {IDvitsState, LoadingState} from "./interfaces/state";


const initialState: IDvitsState = {
    items: [],
    loadingStatus:LoadingState.NEVER
}



export default function dvitsReducer(state=initialState,action:any) {
    switch (action.type) {

        default:
            return state
    }
}
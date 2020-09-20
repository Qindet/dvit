import {LoadingStatus} from "./general";
import {IDvit} from "./dvits-state";



export interface IDvitState {
    dvit: IDvit | null,
    loadingStatus: LoadingStatus
}
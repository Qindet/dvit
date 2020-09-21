import {LoadingStatus} from "./general";

export interface IDvit {
    _id: string
    text: string
    user: {
        fullName: string
        userName: string
        avatarUrl: string
    }
}

export interface IDvitsState {
    dvits: Array<IDvit>,
    loadingStatus: LoadingStatus,
    loadingAddDvitStatus: LoadingStatus
}
export enum LoadingState {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    NEVER = 'NEVER'
}
export interface IDvit {
    text: string
    user: {
        fullName: string
        userName: string
        avatarUrl: string
    }
}

export interface IDvitsState {
    items: Array<IDvit>,
    loadingStatus: LoadingState
}
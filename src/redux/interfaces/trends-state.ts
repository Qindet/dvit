import {LoadingStatus} from "./general";


export interface ITrend {
    _id: string
    name: string
    count: number
}

export interface ITrendsState {
    trends: Array<ITrend>
    loadingStatus: LoadingStatus
}
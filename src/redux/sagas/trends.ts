import {call, put, takeEvery} from 'redux-saga/effects'
import {TrendsActionsType, fetchTrendsLoaded, setTrendsLoadingStatus} from "../actions/trends"
import {TrendsApi} from "../../services/trends-api"
import { LoadingStatus } from '../interfaces/general'

const trendsService = new TrendsApi()

export function* fetchTrendsRequest() {
    try {
        const data = yield call(trendsService.fetchTrends)
        yield put(fetchTrendsLoaded(data))
    } catch (e) {
        yield put(setTrendsLoadingStatus(LoadingStatus.FAILED))
    }
}

export function* trendsSaga() {
    yield takeEvery(TrendsActionsType.FETCH_TRENDS_REQUESTED,fetchTrendsRequest)
}
import {call, put, takeEvery} from 'redux-saga/effects'
import {DvitsActionsType, fetchDvitsLoaded, setDvitsLoadingStatus} from "../actions/dvits"
import {DvitsApi} from "../../services/dvits-api"
import { LoadingStatus } from '../interfaces/general'

const dvitsService = new DvitsApi()

export function* fetchDvitsRequest() {
    try {
        const data = yield call(dvitsService.fetchDvits)
        yield put(fetchDvitsLoaded(data))
    } catch (e) {
        yield put(setDvitsLoadingStatus(LoadingStatus.FAILED))
    }
}

export function* dvitsSaga() {
    yield takeEvery(DvitsActionsType.FETCH_DVITS_REQUESTED,fetchDvitsRequest)
}
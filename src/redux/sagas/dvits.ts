import {call, put, takeEvery} from 'redux-saga/effects'
import {
    addDvitLoaded,
    DvitsActionsType,
    fetchDvitsLoaded,
    IAddDvitRequestedAction,
    setDvitsLoadingStatus
} from "../actions/dvits"
import {DvitsApi} from "../../services/dvits-api"
import { LoadingStatus } from '../interfaces/general'
import {IDvit} from "../interfaces/dvits-state";
import {setDvitLoadingStatus} from "../actions/dvit";

const dvitsService = new DvitsApi()

export function* fetchDvitsRequest() {
    try {
        const data = yield call(dvitsService.fetchDvits)
        yield put(fetchDvitsLoaded(data))
    } catch (e) {
        yield put(setDvitsLoadingStatus(LoadingStatus.FAILED))
    }
}
export function* addDvitRequest({text}:IAddDvitRequestedAction) {
    try {
        const dvit: IDvit = {
            _id: Math.random().toString(10).substr(4),
            text,
            user: {
                userName: 'Dima',
                fullName: 'Zholobov',
                avatarUrl: 'https://source.unsplash.com/random/100x100?5'
            },
        }
        const data = yield call(dvitsService.addDvit,dvit)
        yield put(addDvitLoaded(data))
    } catch (e) {
        yield put(setDvitLoadingStatus(LoadingStatus.FAILED))
    }
}

export function* dvitsSaga() {
    yield takeEvery(DvitsActionsType.FETCH_DVITS_REQUESTED,fetchDvitsRequest)
    yield takeEvery(DvitsActionsType.ADD_DVIT_REQUESTED,addDvitRequest)
}
import {call, put, takeEvery} from 'redux-saga/effects'
import {DvitsApi} from "../../services/dvits-api"
import { LoadingStatus } from '../interfaces/general'
import {DvitActionsType, fetchDvitLoaded, IFetchDvitRequestedAction, setDvitLoadingStatus} from "../actions/dvit";

const dvitsService = new DvitsApi()

export function* fetchDvitRequest({id}: IFetchDvitRequestedAction) {
    try {
        const data = yield call(dvitsService.fetchDvit,id)
        yield put(fetchDvitLoaded(data))
    } catch (e) {
        yield put(setDvitLoadingStatus(LoadingStatus.FAILED))
    }
}

export function* dvitSaga() {
    yield takeEvery(DvitActionsType.FETCH_DVIT_REQUESTED,fetchDvitRequest)
}
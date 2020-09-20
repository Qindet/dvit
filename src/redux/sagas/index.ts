import { all } from "redux-saga/effects";
import {dvitsSaga} from "./dvits";
import {trendsSaga} from "./trends";
import {dvitSaga} from "./dvit";

export default function* rootSaga() {
    yield all([
        dvitsSaga(),
        trendsSaga(),
        dvitSaga()
    ])
}
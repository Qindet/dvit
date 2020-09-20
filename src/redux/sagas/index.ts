import { all } from "redux-saga/effects";
import {dvitsSaga} from "./dvits";
import {trendsSaga} from "./trends";

export default function* rootSaga() {
    yield all([
        dvitsSaga(),
        trendsSaga()
    ])
}
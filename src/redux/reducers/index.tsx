import {combineReducers} from 'redux'
import dvitsReducer from './dvits'
import trendsReducer from "./trends";

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export const rootReducer = combineReducers({dvitsReducer,trendsReducer})
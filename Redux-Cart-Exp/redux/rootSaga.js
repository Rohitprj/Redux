import { all } from "redux-saga/effects"
import watchFetchDataSaga from "./saga/sagaApi"

export default function* rootSaga(){
    yield all([watchFetchDataSaga()])
}
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchFailure, fetchRequest, fetchSuccess } from "../action/actionApi";

// const fetchData = fetch("https://fake-api1.vercel.app/api/products/").then(
//   (response) => response.json()
// );

async function fetchData() {
  try {
    const fetchingData = await fetch(
      "https://fake-api1.vercel.app/api/products/"
    );
    const response = await fetchingData.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

function* fetchDataSaga() {
  try {
    const data = yield call(fetchData);
    yield put(fetchSuccess(data));
  } catch (error) {
    yield put(fetchFailure(error.message));
  }
}
function* watchFetchDataSaga() {
  yield takeEvery(fetchRequest, fetchDataSaga);
}
export default function* sagaApi() {
  yield watchFetchDataSaga();
}

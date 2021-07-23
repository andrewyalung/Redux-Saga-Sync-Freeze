import { call, put, takeEvery } from "redux-saga/effects";

function randomFunction() {
  return true;
}

export function* attemptToIncrement() {
  for (let i = 0; i < 5000; i++) {
    console.log("Before", i);
    yield call(randomFunction);
    console.log("After", i);
  }

  yield put({ type: "INCREMENT" });
}

export default function* rootSaga() {
  yield takeEvery("START_FOR_LOOP", attemptToIncrement);
}

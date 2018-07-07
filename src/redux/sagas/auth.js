import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/actionTypes";

// ...

// Our worker Saga: will perform the async increment task
export function* incrementAsync(action) {
  // yield delay(1000);
  console.log("action123", action);
  yield put({ type: LOGIN_SUCCESS });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchAuthAsync() {
  // console.log(123);
  yield takeLatest(LOGIN_REQUEST, incrementAsync);
}

import { delay } from "redux-saga";
import { put, takeLatest, fork, call } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/actionTypes";

import api from "../../api";

// ...
// Our worker Saga: will perform the async increment task
function* loginAsync(action) {
  // yield delay(1000);
  try {
    const { payloads } = action;
    const auth = yield call(api._put, {
      path: "oauth/login",
      payloads,
      type: "auth"
    });
    const { bearer } = auth;
    yield put({ type: LOGIN_SUCCESS, bearer, payloads });
  } catch (ex) {
    // console.log("action_failure", action);
    yield put({ type: LOGIN_FAILURE });
  }
  //
}

// Our watcher Saga: spawn a new loginAsync task on each LOGIN_REQUEST
export function* watchAuthAsync() {
  yield takeLatest(LOGIN_REQUEST, loginAsync);
}

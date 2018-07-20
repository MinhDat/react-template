import { put, takeLatest, call } from "redux-saga/effects";
import {
  CHECK_ACCOUNT_REQUEST,
  CHECK_ACCOUNT_SUCCESS,
  CHECK_ACCOUNT_FAILURE,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  SHOW_ALERT
} from "../actions/constants";

import api from "../../api";

// ...
// Our worker Saga: will perform the async increment task
function* checkAccountAsync(action) {
  try {
    const { payloads } = action;
    const data = yield call(api._put, {
      path: "oauth/user-existence",
      payloads,
      type: "auth"
    });
    const { one_health_msg } = data;
    yield put({ type: CHECK_ACCOUNT_SUCCESS, data: one_health_msg });
  } catch (ex) {
    // console.log(ex);
    yield put({ type: SHOW_ALERT, payloads: { message: ex.error.message } });
    yield put({ type: CHECK_ACCOUNT_FAILURE });
  }
}

function* createAccountAsync(action) {
  try {
    const { payloads } = action;
    const data = yield call(api._post, {
      path: "oauth/user-register",
      payloads,
      type: "auth"
    });
    const { one_health_msg } = data;
    yield put({ type: CREATE_ACCOUNT_SUCCESS, data: one_health_msg });
  } catch (ex) {
    yield put({ type: SHOW_ALERT, payloads: { message: ex.error.message } });
    yield put({ type: CREATE_ACCOUNT_FAILURE });
  }
}

export function* watchAccountAsync() {
  yield takeLatest(CHECK_ACCOUNT_REQUEST, checkAccountAsync);
  yield takeLatest(CREATE_ACCOUNT_REQUEST, createAccountAsync);
}

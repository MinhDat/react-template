import { delay } from "redux-saga";
import { put, takeLatest, fork, call } from "redux-saga/effects";
import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAILURE
} from "../actions/constants";

import api from "../../api";

// ...
// Our worker Saga: will perform the async increment task
function* usersListAsync(action) {
  try {
    const { payloads } = action;
    const data = yield call(api._get, {
      path: "user",
      payloads,
      type: "api"
    });
    const { one_health_msg } = data;
    yield put({ type: USERS_LIST_SUCCESS, data: one_health_msg });
  } catch (ex) {
    yield put({ type: USERS_LIST_FAILURE });
  }
}

export function* watchUsersListAsync() {
  yield takeLatest(USERS_LIST_REQUEST, usersListAsync);
}

import { delay } from "redux-saga";
import { put, takeLatest, fork, call } from "redux-saga/effects";
import {
  CHECK_FITNESS_REQUEST,
  CHECK_FITNESS_SUCCESS,
  CHECK_FITNESS_FAILURE,
  CREATE_FITNESS_REQUEST,
  CREATE_FITNESS_SUCCESS,
  CREATE_FITNESS_FAILURE,
  SHOW_ALERT
} from "../actions/constants";

import api from "../../api";

// ...
// Our worker Saga: will perform the async increment task
function* checkFitnessAsync(action) {
  try {
    const { payloads } = action;
    const data = yield call(api._put, {
      path: "oauth/fitness-existence",
      payloads,
      type: "auth"
    });
    const { one_health_msg } = data;
    yield put({ type: CHECK_FITNESS_SUCCESS, data: one_health_msg });
  } catch (ex) {
    // console.log(ex);
    yield put({ type: SHOW_ALERT, payloads: { message: ex.error.message } });
    yield put({ type: CHECK_FITNESS_FAILURE });
  }
}

function* createFitnessAsync(action) {
  try {
    const { payloads } = action;
    const data = yield call(api._post, {
      path: "oauth/fitness-register",
      payloads,
      type: "auth"
    });
    const { one_health_msg } = data;
    yield put({ type: CREATE_FITNESS_SUCCESS, data: one_health_msg });
  } catch (ex) {
    yield put({ type: SHOW_ALERT, payloads: { message: ex.error.message } });
    yield put({ type: CREATE_FITNESS_FAILURE });
  }
}

export function* watchFitnessAsync() {
  yield takeLatest(CHECK_FITNESS_REQUEST, checkFitnessAsync);
  yield takeLatest(CREATE_FITNESS_REQUEST, createFitnessAsync);
}

import { put, takeLatest, call } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DOMAIN_REQUEST,
  DOMAIN_SUCCESS,
  DOMAIN_FAILURE
} from "../actions/constants";
// import { push } from 'connected-react-router'

import api from "../../api";

// ...
// Our worker Saga: will perform the async loginAsync task
function* loginAsync(action) {
  // yield delay(1000);
  try {
    const { payloads } = action;
    const auth = yield call(api._put, {
      path: "oauth/login",
      payloads,
      type: "auth"
    });
    const { one_health_msg } = auth;
    const data = { ...one_health_msg, username: payloads.username };
    localStorage.setItem("authenication", JSON.stringify(data));
    yield put({ type: LOGIN_SUCCESS, data });
    // yield put(push('/'));
  } catch (ex) {
    // console.log("action_failure", action);
    yield put({ type: LOGIN_FAILURE });
  }
}

function* domainAsync(action) {
  try {
    const { payloads } = action;
    const domain = yield call(api._get, {
      path: "oauth/domain",
      payloads,
      type: "auth"
    });
    const { one_health_msg } = domain;
    const data = one_health_msg;
    // console.log(data);
    yield put({ type: DOMAIN_SUCCESS, data });
  } catch (ex) {
    // console.log("action_failure", action);
    yield put({ type: DOMAIN_FAILURE });
  }
}

// Our watcher Saga: spawn a new loginAsync task on each LOGIN_REQUEST
export function* watchAuthAsync() {
  yield takeLatest(LOGIN_REQUEST, loginAsync);
  yield takeLatest(DOMAIN_REQUEST, domainAsync);
}

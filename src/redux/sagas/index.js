import { all, fork } from "redux-saga/effects";
import { watchAuthAsync } from "./auth";

// console.log("watch", watchAuthAsync);

export default function* sagas() {
  yield all([fork(watchAuthAsync)]);
}

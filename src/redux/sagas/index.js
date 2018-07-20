import { all, fork } from "redux-saga/effects";
import { watchAuthAsync } from "./auth";
import { watchUsersListAsync } from "./user";
import { watchFitnessAsync } from "./fitness";
import { watchAccountAsync } from "./account";

// console.log("watch", watchAuthAsync);

export default function* sagas() {
  yield all([
    fork(watchAuthAsync),
    fork(watchUsersListAsync),
    fork(watchFitnessAsync),
    fork(watchAccountAsync)
  ]);
}

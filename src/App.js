import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Loadable from "react-loadable";

import sagas from "./redux/sagas";
import configureStore from "./redux/configureStore";
import routes from "./routes";
import "./App.scss";

// Add extend css file
const AppWrapper = Loadable({
  loader: () => import("./containers/AppWrapper"),
  loading: () => <div>Loading...</div>
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);
// console.log(store);
store.runSaga(sagas);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppWrapper>{routes()}</AppWrapper>
      </Router>
    </Provider>
  );
};
render(<App />, document.getElementById("App"));

module.hot.accept();

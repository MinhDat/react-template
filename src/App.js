import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import rootSaga from "./redux/sagas";
import configureStore from "./redux/configureStore";
import AppWrapper from "./containers/AppWrapper";
import routes from "./routes";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);
store.runSaga(rootSaga);

// console.log(routes);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWrapper>{routes()}</AppWrapper>
      </Provider>
    );
  }
}
render(<App />, document.getElementById("App"));

module.hot.accept();

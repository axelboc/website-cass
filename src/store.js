import { combineReducers } from "redux";
import createStore from "phenomic/lib/redux/createStore";
import * as phenomicReducers from "phenomic/lib/redux/modules";
import reducers from "./state/reducers";

const store = createStore(
  combineReducers({
    ...phenomicReducers,
    ...reducers
  }),
  { ...(typeof window !== "undefined") && window.__INITIAL_STATE__ }
);

// webpack hot loading
if (module.hot) {
  // enable hot module replacement for reducers
  module.hot.accept([
    // hot load your reducers
    "./state/reducers",
  ], () => {
    const updatedReducer = combineReducers({
      // we still need to combine all reducers
      ...require("phenomic/lib/redux/modules"),
      ...require("./state/reducers"),
    });
    store.replaceReducer(updatedReducer);
  });
}

export default store;

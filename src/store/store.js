import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Cliente } from "../reducer/Cliente";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  cliente: Cliente,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

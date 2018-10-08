import {createBrowserHistory} from "history";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import * as reducers from "./reducers";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

export const store = createStore(
  connectRouter(history)(combineReducers({...reducers})),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
  )
);
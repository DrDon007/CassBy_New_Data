import { createStore, applyMiddleware } from "redux";
//import { countReducer } from "./counter/reducer";
import reducers from "../src/redux/reducers/";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import { userSaga } from "./Sagas/user.saga";

const sagaMiddleware = createSagaMiddleware();

// function* userSaga() {
//   yield console.log("saga working");
// }

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export default store;

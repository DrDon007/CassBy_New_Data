import { takeLatest } from "redux-saga/effects";
import { userConstants } from "../redux/constant/user.constants";
import siteConfig from '../Services/siteConfig';
import axios from "axios";


//const userData = "hanu.indrakanti@caasby.com", ""

function* userSagaAsync() {
  //yield get({ type: userConstants.LOGIN_REQUEST_ASYNC, values: userData });
  yield console.log("userSagaAsync working");
   // yield yield call(api.fetchUser, action.userId);
}

export function* userSaga() {
  yield takeLatest(userConstants.LOGIN_REQUEST, userSagaAsync);
  //yield console.log("sagais working");
}

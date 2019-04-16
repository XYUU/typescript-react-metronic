import * as Actions from '../constants/actions';
import { call, put, takeLatest } from 'redux-saga/effects';

function json(url, options) {
  return fetch(url, options).then(
    resp => {
      if (resp.ok) {
        return resp.json().then(data => data.message
          , error => {
            throw { message: "JSON报文解析失败" };
          });
      }
      throw { message: `服务器错误,错误代码（${resp.status}）。` };
    },
    error => {
      throw { message: "网络不通" };
    }
  );
}

function* signin(action) {
  try {
    const user = yield call(json, "signin", action.payload);
    yield put({ type: "USER_FETCH_SUCCEEDED", payload: user });
  } catch (e) {
    yield put({ type: Actions.TOASTR_MESSAGE, payload: e.message });
  }
}

function* signup(action) {
  try {
    const user = yield call(fetch, "signup", action.payload);
    yield put({ type: "USER_FETCH_SUCCEEDED", payload: user });
  } catch (e) {
    yield put({ type: Actions.TOASTR_MESSAGE, payload: e.message });
  }
}

function* forgetPassword(action) {
  try {
    const user = yield call(fetch, "forgetPassword", action.payload);
    yield put({ type: "USER_FETCH_SUCCEEDED", payload: user });
  } catch (e) {
    yield put({ type: Actions.TOASTR_MESSAGE, payload: e.message });
  }
}

function* saga() {
  yield takeLatest(Actions.SIGN_IN, signin);
  yield takeLatest(Actions.SIGN_UP, signup);
  yield takeLatest(Actions.FORGET_PASSWORD, forgetPassword);
}

export default saga;
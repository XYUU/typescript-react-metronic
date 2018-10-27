import { call, put, take } from 'redux-saga-ie8/effects'

function* fetchUser(action) {
   try {
      const user = yield call(fetch, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield take("USER_FETCH_REQUESTED");
}

export default mySaga;
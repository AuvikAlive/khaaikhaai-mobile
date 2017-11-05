import { put, call, takeEvery } from 'redux-saga/effects'
import { database } from '../database'
import {
  fetchRestaurantsAction,
  fetchRestaurantsActionFulfilled
} from '../actions/constants'

const queryData = (startAt, limitToFirst) => {
  if (startAt) {
    return database
      .ref('/restaurants')
      .orderByKey()
      .startAt(startAt)
      .limitToFirst(limitToFirst)
      .once('value')
  } else {
    return database
      .ref('/restaurants')
      .limitToFirst(limitToFirst)
      .once('value')
  }
}

const fetchRestaurants = function* fetchRestaurants({ startAt, limitToFirst }) {
  try {
    const snapshot = yield call(queryData, startAt, limitToFirst)
    yield put({
      type: fetchRestaurantsActionFulfilled,
      payload: snapshot.val()
    })
  } catch (e) {
    console.log(e)
  }
}

export const fetchRestaurantsSaga = function* fetchRestaurantsSaga() {
  yield takeEvery(fetchRestaurantsAction, fetchRestaurants)
}

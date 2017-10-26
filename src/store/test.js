import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import {
  fetchRestaurantsAction,
  fetchRestaurantsActionFullfilled
} from '../actions/constants'
import list from '../actions/list'

export function* fetchRestaurants() {
  yield delay(1000)
  yield put({ type: fetchRestaurantsActionFullfilled, payload: list })
}

export function* watchFetchRestaurants() {
  yield takeEvery(fetchRestaurantsAction, fetchRestaurants)
}

function* rootSaga() {
  yield all([watchFetchRestaurants()])
}

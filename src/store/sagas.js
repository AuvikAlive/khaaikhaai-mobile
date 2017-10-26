import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'
import {
  fetchRestaurantsAction,
  fetchRestaurantsActionFullfilled
} from '../actions/constants'
import { database } from './database'

export function getRestaurantsFromFirebase() {
  return new Promise((resolve, reject) => {
    database
      .ref('/restaurants')
      .limitToFirst(5)
      .on('value', snapshot => resolve(snapshot.val()))
  })
}

export const fetchRestaurants = function* fetchRestaurants() {
  const restaurants = yield getRestaurantsFromFirebase()
  yield put({ type: fetchRestaurantsActionFullfilled, payload: restaurants })
}

export const watchFetchRestaurants = function* watchFetchRestaurants() {
  yield takeEvery(fetchRestaurantsAction, fetchRestaurants)
}

const rootSaga = function* rootSaga() {
  yield all([watchFetchRestaurants()])
}

export default rootSaga

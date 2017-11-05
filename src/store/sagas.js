import { eventChannel } from 'redux-saga'
import { put, take, fork } from 'redux-saga/effects'
import { fetchRestaurantsAction } from './actions/constants'
import { database } from './database'

function createEventChannel() {
  const listener = eventChannel(emit => {
    database
      .ref('/restaurants')
      .limitToFirst(2)
      .on('value', snapshot => emit(snapshot.val()))

    return () => database.ref('/restaurants').off(listener)
  })

  return listener
}

export const fetchRestaurantsSaga = function* fetchRestaurants() {
  const updateChannel = createEventChannel()
  while (true) {
    const restaurants = yield take(updateChannel)
    yield put({ type: fetchRestaurantsAction, payload: restaurants })
  }
}

const rootSaga = function* rootSaga() {
  yield fork(fetchRestaurantsSaga)
}

export default rootSaga

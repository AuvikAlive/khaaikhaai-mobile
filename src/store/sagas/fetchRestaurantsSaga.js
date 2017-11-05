import { eventChannel } from 'redux-saga'
import { put, take } from 'redux-saga/effects'
import { fetchRestaurants } from '../actions/actions'
import { database } from '../database'

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

export const fetchRestaurantsSaga = function* fetchRestaurantsSaga() {
  const updateChannel = createEventChannel()
  while (true) {
    const restaurants = yield take(updateChannel)
    yield put(fetchRestaurants(restaurants))
  }
}

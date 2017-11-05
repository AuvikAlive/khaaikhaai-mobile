import { fork } from 'redux-saga/effects'
import { fetchRestaurantsSaga } from './sagas/fetchRestaurantsSaga'

const rootSaga = function* rootSaga() {
  yield fork(fetchRestaurantsSaga)
}

export default rootSaga

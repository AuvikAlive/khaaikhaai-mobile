import restaurantsReducer from './restaurantsReducer'
import { fetchRestaurants } from '../actions/actions'
import list from '../actions/list'

test('restaurantsReducer returns previous state when action does not match', () => {
  const action = {
    type: ''
  }

  const state = []

  expect(restaurantsReducer(state, action)).toEqual(state)
})

test('restaurantsReducer returns restaurants when action matches', () => {
  const action = fetchRestaurants(list)
  const state = []
  const expectedState = list

  expect(restaurantsReducer(state, action)).toEqual(expectedState)
})

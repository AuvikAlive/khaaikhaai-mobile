import reviewsReducer from './reviewsReducer'
import { fetchReviews } from '../actions/actions'
import list from '../actions/list';

test('reviewsReducer returns previous state when action does not match', () => {
  const action = {
    type: ''
  }

  const state = []

  expect(reviewsReducer(state, action)).toEqual(state)
})

test('reviewsReducer returns reviews when action matches', () => {
  const action = fetchReviews()
  const state = []
  const expectedState = list

  expect(reviewsReducer(state, action)).toEqual(expectedState)
})
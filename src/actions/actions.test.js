import { fetchReviews } from './actions'
import { fetchReviewsAction } from './constants'
import list from './list'

describe('Reviews actions', () => {
  test('fetchReviews action creators returns fetchReviesActon', () => {
    const action = {
      type: fetchReviewsAction,
      payload: list
    }

    expect(fetchReviews()).toEqual(action)
  })
})

import { fetchRestaurants } from './actions'
import { fetchRestaurantsAction } from './constants'
import { fetchReviews } from './actions'
import { fetchReviewsAction } from './constants'
import list from './list'

describe('Restaurants actions', () => {
  test('fetchRestaurants action creator returns fetchRestaurants action', () => {
    const startAt = 40
    const limitToFirst = 20
    const action = {
      type: fetchRestaurantsAction,
      startAt,
      limitToFirst
    }

    expect(fetchRestaurants(limitToFirst, startAt)).toEqual(action)
  })
})

describe('Reviews actions', () => {
  test('fetchReviews action creator returns fetchReviewsActon', () => {
    const action = {
      type: fetchReviewsAction,
      payload: list
    }

    expect(fetchReviews()).toEqual(action)
  })
})

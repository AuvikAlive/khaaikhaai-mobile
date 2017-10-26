import { fetchRestaurantsAction, fetchReviewsAction } from './constants'
import list from './list'

export function fetchRestaurants() {
  return {
    type: fetchRestaurantsAction
  }
}

export const fetchReviews = () => {
  return {
    type: fetchReviewsAction,
    payload: list
  }
}

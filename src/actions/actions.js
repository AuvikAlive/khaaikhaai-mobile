import { fetchRestaurantsAction, fetchReviewsAction } from './constants'
import list from './list'

export function fetchRestaurants() {
  return {
    type: fetchRestaurantsAction,
    payload: list
  }
}

export const fetchReviews = () => {
  return {
    type: fetchReviewsAction,
    payload: list
  }
}

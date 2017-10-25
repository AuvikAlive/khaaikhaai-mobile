import { fetchRestaurants, fetchReviewsAction } from './constants'
import list from './list'

export function fetchRestaurantsAction() {
  return {
    type: fetchRestaurants,
    payload: list
  }
}

export const fetchReviews = () => {
  return {
    type: fetchReviewsAction,
    payload: list
  }
}

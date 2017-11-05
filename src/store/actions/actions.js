import { fetchRestaurantsAction, queryRestaurantsAction, fetchReviewsAction } from './constants'
import list from './list'

export function fetchRestaurants() {
  return {
    type: fetchRestaurantsAction
  }
}

export function queryRestaurants(restaurantName) {
  return {
    type: queryRestaurantsAction,
    payload: restaurantName
  }
}

export const fetchReviews = () => {
  return {
    type: fetchReviewsAction,
    payload: list
  }
}

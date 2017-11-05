import {
  fetchRestaurantsAction,
  queryRestaurantsAction,
  fetchReviewsAction
} from './constants'
import list from './list'

export function fetchRestaurants(restaurants) {
  return {
    type: fetchRestaurantsAction,
    payload: restaurants
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

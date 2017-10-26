import {
  fetchRestaurantsAction,
  fetchRestaurantsActionFullfilled
} from '../actions/constants'

const restaurantsReducer = (state = [], action) => {
  switch (action.type) {
    case fetchRestaurantsAction:
      return state

    case fetchRestaurantsActionFullfilled:
      return action.payload

    default:
      return state
  }
}

export default restaurantsReducer

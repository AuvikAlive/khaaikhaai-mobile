import { fetchRestaurants } from '../actions/constants'

const restaurantsReducer = (state = [], action) => {
  switch (action.type) {
    case fetchRestaurants:
      return action.payload

    default:
      return state
  }
}

export default restaurantsReducer

import { fetchRestaurantsAction } from '../actions/constants'

const restaurantsReducer = (state = [], action) => {
  switch (action.type) {
    case fetchRestaurantsAction:
      return action.payload

    default:
      return state
  }
}

export default restaurantsReducer

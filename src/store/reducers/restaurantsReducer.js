import { fetchRestaurantsActionFulfilled } from '../actions/constants'

const restaurantsReducer = (state = [], action) => {
  switch (action.type) {
    case fetchRestaurantsActionFulfilled:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export default restaurantsReducer

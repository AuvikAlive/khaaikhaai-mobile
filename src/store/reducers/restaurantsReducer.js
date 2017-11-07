import {
  fetchRestaurantsAction,
  fetchRestaurantsActionFulfilled
} from '../actions/constants'
const initialState = {
  loading: false,
  list: []
}

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchRestaurantsAction:
      return {
        ...state,
        loading: true
      }

    case fetchRestaurantsActionFulfilled:
      return {
        ...state,
        loading: false,
        list: { ...state.list, ...action.payload }
      }

    default:
      return state
  }
}

export default restaurantsReducer

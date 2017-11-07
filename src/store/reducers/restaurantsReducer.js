import { fetchRestaurantsActionFulfilled } from '../actions/constants'
const initialState = {
  loading: true,
  list: []
}

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
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

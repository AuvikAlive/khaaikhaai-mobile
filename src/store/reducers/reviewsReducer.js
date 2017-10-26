import { fetchReviewsAction } from '../actions/constants'

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case fetchReviewsAction:
      return action.payload

    default:
      return state
  }
}

export default reviewsReducer

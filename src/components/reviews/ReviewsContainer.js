// @flow

import React, { Component } from 'react'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchReviews } from '../../actions/actions'
import Reviews from './Reviews'

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="badge" type="simple-line-icon" color={tintColor} />
  )
}

type Props = {
  fetchReviews: () => void,
  reviews: Array<Object>
}

class ReviewsContainer extends Component<void, Props, void> {
  static navigationOptions = navigationOptions

  componentDidMount() {
    this.props.fetchReviews()
  }

  render() {
    return <Reviews list={this.props.reviews} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchReviews: () => {
      dispatch(fetchReviews())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

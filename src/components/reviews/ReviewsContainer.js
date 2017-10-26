// @flow

import React, { Component } from 'react'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchReviews } from '../../store/actions/actions'
import Reviews from './Reviews'

type Props = {
  fetchReviews: () => void,
  reviews: Array<Object>
}

class ReviewsContainer extends Component<void, Props, void> {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="badge" type="simple-line-icon" color={tintColor} />
    )
  }

  componentDidMount() {
    this.props.fetchReviews()
  }

  render() {
    return <Reviews list={this.props.reviews} />
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: () => {
      dispatch(fetchReviews())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

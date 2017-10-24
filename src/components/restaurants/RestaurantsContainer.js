// @flow

import React, { Component } from 'react'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchRestaurantsAction } from '../../actions/actions'

import Restaurants from './Restaurants'

const navigationOptions = {
  tabBarIcon: ({ tintColor }: { tintColor: string }) => (
    <Icon name="restaurant-menu" color={tintColor} />
  )
}

type Props = {
  fetchRestaurants: () => void,
  restaurants: Array<Object>
}

class RestaurantsContainer extends Component<void, Props, void> {
  static navigationOptions = navigationOptions

  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {
    return <Restaurants list={this.props.restaurants} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchRestaurants: () => {
      dispatch(fetchRestaurantsAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RestaurantsContainer
)

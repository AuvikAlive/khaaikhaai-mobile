// @flow

import React, { Component } from 'react'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import values from 'lodash/values'
import Restaurants from './Restaurants'

type Props = {
  fetchRestaurants: () => void,
  restaurants: Array<Object>
}

class RestaurantsContainer extends Component<void, Props, void> {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }: { tintColor: string }) => (
      <Icon name="restaurant-menu" color={tintColor} />
    )
  }

  render() {
    return <Restaurants list={this.props.restaurants} />
  }
}

const mapStateToProps = state => {
  const restaurantsObject = state.restaurants
  const restaurants = values(restaurantsObject)
  return {
    restaurants: restaurants
  }
}

export default connect(mapStateToProps)(RestaurantsContainer)

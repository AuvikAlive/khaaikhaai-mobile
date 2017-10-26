// @flow

import React, { Component } from 'react'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import values from 'lodash/values';
import { fetchRestaurants } from '../../actions/actions'
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

  componentDidMount() {
    this.props.fetchRestaurants()
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

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: () => {
      dispatch(fetchRestaurants())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RestaurantsContainer
)

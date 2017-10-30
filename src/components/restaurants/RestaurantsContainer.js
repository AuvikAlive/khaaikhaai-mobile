// @flow

import React from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'
import Restaurants from './Restaurants'

type Props = {
  fetchRestaurants: () => void,
  restaurants: Array<Object>,
  navigation: { navigate: () => void }
}

const RestaurantsContainer = (props: Props) => {
  const navigate = props.navigation.navigate

  return <Restaurants navigate={navigate} list={props.restaurants} />
}

const mapStateToProps = state => {
  const restaurantsObject = state.restaurants
  const restaurants = values(restaurantsObject)
  return {
    restaurants: restaurants
  }
}

export default connect(mapStateToProps)(RestaurantsContainer)

// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'
import Restaurants from './Restaurants'

type Props = {
  fetchRestaurants: () => void,
  restaurants: Array<Object>
}

const RestaurantsContainer = (props: Props) => {
  const viewDetails = () => {
    props.navigation.navigate('Details', { test: 'something' })
  }
  return <Restaurants onItemPress={viewDetails} list={props.restaurants} />
}

const mapStateToProps = state => {
  const restaurantsObject = state.restaurants
  const restaurants = values(restaurantsObject)
  return {
    restaurants: restaurants
  }
}

export default connect(mapStateToProps)(RestaurantsContainer)

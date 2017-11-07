// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import values from 'lodash/values'
import Restaurants from './Restaurants'
import { fetchRestaurants } from '../../store/actions/actions'

type Props = {
  fetchRestaurants: () => void,
  restaurants: Array<Object>,
  navigation: { navigate: () => void },
  loading: boolean
}

class RestaurantsContainer extends Component<void, Props, void> {
  componentDidMount() {
    this.props.fetchRestaurants(20)
  }

  render() {
    const navigate = this.props.navigation.navigate
    const { restaurants, fetchRestaurants, loading } = this.props

    return (
      <Restaurants
        navigate={navigate}
        list={restaurants}
        fetchRestaurants={fetchRestaurants}
        loading={loading}
      />
    )
  }
}

const mapStateToProps = state => {
  const { list, loading } = state.restaurants
  const restaurants = values(list)
  return {
    restaurants,
    loading
  }
}

const mapDispatchToProps = {
  fetchRestaurants
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RestaurantsContainer
)

// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import values from 'lodash/values'
import Restaurants from './Restaurants'
import { fetchRestaurants } from '../../store/actions/actions'

type Props = {
  fetchRestaurants: () => void,
  restaurants: Array<Object>,
  navigation: { navigate: () => void }
}

class RestaurantsContainer extends Component<void, Props, void> {
  componentDidMount() {
    this.props.fetchRestaurants(null, 20)
  }

  render() {
    const navigate = this.props.navigation.navigate
    const { restaurants, fetchRestaurants } = this.props

    return (
      <Restaurants
        navigate={navigate}
        list={restaurants}
        fetchRestaurants={fetchRestaurants}
      />
    )
  }
}

const mapStateToProps = state => {
  const restaurantsObject = state.restaurants
  const restaurants = values(restaurantsObject)
  return {
    restaurants: restaurants
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ fetchRestaurants }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(
  RestaurantsContainer
)

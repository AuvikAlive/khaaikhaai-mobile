import React, { Component } from 'react'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchRestaurantsAction } from '../../actions/actions'

import Restaurants from './Restaurants'
import { list } from './List'

class RestaurantsContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
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

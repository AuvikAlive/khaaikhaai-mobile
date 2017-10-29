import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import ReviewsContainer from '../reviews/ReviewsContainer'
import RestaurantsStack from '../restaurants/RestaurantsStack'
import Profile from '../profile/Profile'

import { blue, green } from '../../theme'

const restaurantsIcon = ({ tintColor }) => (
  <Icon name="restaurant-menu" color={tintColor} />
)

const RouteConfigs = {
  Restaurants: {
    screen: RestaurantsStack,
    navigationOptions: {
      tabBarIcon: restaurantsIcon
    }
  },
  Reviews: {
    screen: ReviewsContainer
  },
  Profile: {
    screen: Profile
  }
}

const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
    inactiveTintColor: 'white',
    activeTintColor: green,
    indicatorStyle: {
      backgroundColor: green
    },
    style: {
      backgroundColor: blue
    }
  }
}

const Tabs = TabNavigator(RouteConfigs, TabNavigatorConfig)

export default Tabs

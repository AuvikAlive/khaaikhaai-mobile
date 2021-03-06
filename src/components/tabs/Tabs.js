import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import ReviewsContainer from '../reviews/ReviewsContainer'
import RestaurantsStack from '../restaurantsStack/RestaurantsStack'
import Profile from '../profile/Profile'

import { blue, red } from '../../theme'

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
    activeTintColor: red,
    indicatorStyle: {
      backgroundColor: red
    },
    style: {
      backgroundColor: blue
    }
  }
}

const Tabs = TabNavigator(RouteConfigs, TabNavigatorConfig)

export default Tabs

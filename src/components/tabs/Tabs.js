import React from 'react'
import { TabNavigator } from 'react-navigation'

import ReviewsContainer from '../reviews/ReviewsContainer'
import RestaurantsContainer from '../restaurants/RestaurantsContainer'
import Profile from '../profile/Profile'

import { red, blue, orange } from '../../config/colors'

const RouteConfigs = {
  Reviews: {
    screen: ReviewsContainer
  },
  Restaurants: {
    screen: RestaurantsContainer
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

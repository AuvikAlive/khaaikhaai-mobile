import React from 'react'
import { TabNavigator } from 'react-navigation'

import Reviews from '../reviews/Reviews'
import Restaurants from '../restaurants/Restaurants'
import Profile from '../profile/Profile'

import { red, blue, orange } from '../../config/colors'

const RouteConfigs = {
  Reviews: {
    screen: Reviews
  },
  Restaurants: {
    screen: Restaurants
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

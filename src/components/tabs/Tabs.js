import React from 'react'
import { TabNavigator } from 'react-navigation'

import Reviews from '../reviews/Reviews'
import Restaurants from '../restaurants/Restaurants'
import Profile from '../profile/Profile'

import { red, yellow } from '../../config/colors'

const screens = {
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

const options = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
    inactiveTintColor: 'white',
    activeTintColor: yellow,
    indicatorStyle: {
      backgroundColor: yellow
    },
    style: {
      backgroundColor: red
    }
  }
}

const Tabs = TabNavigator(screens, options)

export default Tabs

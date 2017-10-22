import React from 'react'
import { TabNavigator } from 'react-navigation'

import Restaurants from '../restaurants/Restaurants'
import Reviews from '../reviews/Reviews'
import Profile from '../profile/Profile'

const screens = {
  Restaurants: {
    screen: Restaurants
  },
  Reviews: {
    screen: Reviews
  },
  Profile: {
    screen: Profile
  }
}

const options = {
  tabBarPosition: 'bottom'
}

const Tabs = TabNavigator(screens, options)

export default Tabs

import React from 'react'
import { TabNavigator } from 'react-navigation'

import Restaurants from '../restaurants/Restaurants'
import Reviews from '../reviews/Reviews'
import Profile from '../profile/Profile'

import { red, yellow } from '../../config/colors'

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
  tabBarPosition: 'bottom',
  tabBarOptions: {
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

import { TabNavigator } from 'react-navigation'
import ReviewsContainer from '../reviews/ReviewsContainer'
import RestaurantsContainer from '../restaurants/RestaurantsContainer'
import Profile from '../profile/Profile'

import { red, yellow } from '../../theme'

const RouteConfigs = {
  Restaurants: {
    screen: RestaurantsContainer
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
    activeTintColor: yellow,
    indicatorStyle: {
      backgroundColor: red
    },
    style: {
      backgroundColor: red
    }
  }
}

const Tabs = TabNavigator(RouteConfigs, TabNavigatorConfig)

export default Tabs

import { TabNavigator } from 'react-navigation'
import ReviewsContainer from '../reviews/ReviewsContainer'
import RestaurantsContainer from '../restaurants/RestaurantsContainer'
import Profile from '../profile/Profile'

import { blue, green } from '../../theme'

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
    activeTintColor: green,
    indicatorStyle: {
      backgroundColor: blue
    },
    style: {
      backgroundColor: blue
    }
  }
}

const Tabs = TabNavigator(RouteConfigs, TabNavigatorConfig)

export default Tabs

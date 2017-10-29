import { StackNavigator } from 'react-navigation'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition'
import RestaurantsContainer from './RestaurantsContainer'
import RestaurantDetails from './RestaurantDetails'

const RouteConfigs = {
  Feed: {
    screen: RestaurantsContainer
  },
  Details: {
    screen: RestaurantDetails
  }
}
const StackNavigatorConfig = {
  headerMode: 'none',
  transitionConfig: getSlideFromRightTransition
}

const RestaurantsStack = StackNavigator(RouteConfigs, StackNavigatorConfig)

export default RestaurantsStack

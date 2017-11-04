import { StackNavigator } from 'react-navigation'
import RestaurantsContainer from '../restaurants/RestaurantsContainer'
import RestaurantDetails from '../restaurantDetails/RestaurantDetails'
import ItemVariations from '../restaurantDetails/ItemVariations'

const RouteConfigs = {
  Feed: {
    screen: RestaurantsContainer
  },
  Details: {
    screen: RestaurantDetails
  },
  Variations: {
    screen: ItemVariations
  }
}
const StackNavigatorConfig = {
  headerMode: 'none',
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
      const { index } = scene

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [layout.initWidth, 0, 0]
      })

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
        outputRange: [0, 1, 1, 0.3, 0]
      })

      return { opacity, transform: [{ translateX }] }
    }
  })
}

const RestaurantsStack = StackNavigator(RouteConfigs, StackNavigatorConfig)

export default RestaurantsStack

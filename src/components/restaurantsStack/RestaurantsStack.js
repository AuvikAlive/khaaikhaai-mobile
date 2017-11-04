import { StackNavigator } from 'react-navigation'
import { routeConfig } from './routeConfig'
import { stackNavigatorConfig } from './stackNavigatorConfig'

const RestaurantsStack = StackNavigator(routeConfig, stackNavigatorConfig)

export default RestaurantsStack

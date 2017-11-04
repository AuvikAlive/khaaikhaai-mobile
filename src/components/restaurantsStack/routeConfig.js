import RestaurantsContainer from '../restaurants/RestaurantsContainer'
import RestaurantDetails from '../restaurantDetails/RestaurantDetails'
import ItemVariations from '../restaurantDetails/ItemVariations'

export const routeConfig = {
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

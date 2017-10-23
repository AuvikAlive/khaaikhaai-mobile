import { fetchRestaurants } from './constants'

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    key: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    key: 'Vice Chairman'
  }
]

export function fetchRestaurantsAction() {
  return {
    type: fetchRestaurants,
    payload: list
  }
}

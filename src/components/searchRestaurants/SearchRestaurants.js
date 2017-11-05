import React from 'react'
import throttle from 'lodash/throttle'
import { SearchBar } from 'react-native-elements'

const onChangeText = throttle(query => {
  console.log(query)
}, 2000)

const SearchRestaurants = () => (
  <SearchBar
    lightTheme
    placeholder="Search Restaurants"
    onChangeText={onChangeText}
  />
)

export default SearchRestaurants

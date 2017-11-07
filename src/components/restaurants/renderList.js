// @flow

import React from 'react'
import { ListView } from 'react-native'
import { List } from 'react-native-elements'
import SearchRestaurants from '../searchRestaurants/SearchRestaurantsContainer'
import renderItem from './renderItem'
import Indicator from '../indicator/Indicator'
import throttle from 'lodash/throttle'
import type { listItem } from './listItemType'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

const renderList = (
  list: Array<listItem>,
  navigate: (stackName: string, parameter: { restaurant: listItem }) => void,
  lastItem,
  fetchRestaurants,
  loading
) => {
  const dataSource = ds.cloneWithRows(list)
  const fetchNextRestaurants = throttle(() => {
    fetchRestaurants(20, lastItem.restaurantID)
  }, 2000)

  return (
    <List containerStyle={{ marginTop: 25, marginBottom: 60 }}>
      <SearchRestaurants />
      <ListView
        dataSource={dataSource}
        renderRow={item => renderItem(item, navigate)}
        keyExtractor={(item: listItem): string => item.restaurantName}
        onEndReached={fetchNextRestaurants}
        onEndReachedThreshold={60}
        renderFooter={() => (loading ? <Indicator /> : null)}
      />
    </List>
  )
}

export default renderList

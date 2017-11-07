// @flow

import React from 'react'
import { ListView } from 'react-native'
import { List } from 'react-native-elements'
import SearchRestaurants from '../searchRestaurants/SearchRestaurantsContainer'
import renderItem from './renderItem'
import type { listItem } from './listItemType'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

const renderList = (
  list: Array<listItem>,
  navigate: (stackName: string, parameter: { restaurant: listItem }) => void,
  lastItem,
  fetchRestaurants
) => {
  const dataSource = ds.cloneWithRows(list)
  const loadMoreContentAsync = async () => {
    fetchRestaurants(20, lastItem.restaurantID)
  }
  return (
    <List containerStyle={{ marginTop: 25 }}>
      <SearchRestaurants />
      <ListView
        dataSource={dataSource}
        renderRow={item => renderItem(item, navigate)}
        keyExtractor={(item: listItem): string => item.restaurantName}
      />
    </List>
  )
}

export default renderList

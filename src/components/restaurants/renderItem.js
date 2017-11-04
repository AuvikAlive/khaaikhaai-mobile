import React from 'react'
import { ListItem } from 'react-native-elements'
import type { listItem } from './listItemType'

const renderItem = (
  item: listItem,
  navigate: (stackName: string, parameter: { restaurant: listItem }) => void
) => (
  <ListItem
    onPress={() => navigate('Details', { restaurant: item })}
    key={item.restaurantID}
    title={item.restaurantName}
  />
)

export default renderItem

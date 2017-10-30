import React from 'react'
import values from 'lodash/values'
import { FlatList } from 'react-native'
import { Card, List, ListItem } from 'react-native-elements'

type listItem = {
  restaurantID: string,
  restaurantName: string
}

const RestaurantDetails = props => {
  const restaurant = props.navigation.state.params.restaurant
  const items = values(restaurant.items)

  const renderItem = ({ item }: { item: listItem }) => (
    <ListItem key={item.itemID} title={item.itemName} />
  )

  return (
    <List containerStyle={{ marginTop: 25 }}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item: listItem): string => item.itemID}
      />
    </List>
  )
}

export default RestaurantDetails

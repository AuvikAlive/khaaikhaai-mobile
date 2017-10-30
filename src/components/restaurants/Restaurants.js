// @flow

import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { List, ListItem } from 'react-native-elements'

type listItem = {
  restaurantID: string,
  restaurantName: string
}

type Props = {
  list: Array<listItem>,
  navigation: {
    navigate: (stackName: string, parameter: { restaurant: listItem }) => void
  }
}

class Restaurants extends Component<void, Props, void> {
  onItemPress = (item: listItem) => {
    this.props.navigation.navigate('Details', { restaurant: item })
  }

  renderItem = ({ item }: { item: listItem }) => (
    <ListItem
      onPress={() => this.onItemPress(item)}
      key={item.restaurantID}
      title={item.restaurantName}
    />
  )

  render() {
    return (
      <List containerStyle={{ marginTop: 25 }}>
        <FlatList
          data={this.props.list}
          renderItem={this.renderItem}
          keyExtractor={(item: listItem): string => item.restaurantName}
        />
      </List>
    )
  }
}

export default Restaurants

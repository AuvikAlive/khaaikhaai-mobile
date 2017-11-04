// @flow

import React, { Component } from 'react'
import { ListView } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import SearchRestaurants from '../searchRestaurants/SearchRestaurants'

type listItem = {
  restaurantID: string,
  restaurantName: string
}

type Props = {
  list: Array<listItem>,
  navigate: (stackName: string, parameter: { restaurant: listItem }) => void
}

class Restaurants extends Component<void, Props, void> {
  onItemPress = (item: listItem) => {
    this.props.navigate('Details', { restaurant: item })
  }

  renderItem = (item: listItem) => (
    <ListItem
      onPress={() => this.onItemPress(item)}
      key={item.restaurantID}
      title={item.restaurantName}
    />
  )

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    const dataSource = ds.cloneWithRows(this.props.list)

    return (
      <List containerStyle={{ marginTop: 25 }}>
        <SearchRestaurants />
        <ListView
          dataSource={dataSource}
          renderRow={this.renderItem}
          keyExtractor={(item: listItem): string => item.restaurantName}
        />
      </List>
    )
  }
}

export default Restaurants

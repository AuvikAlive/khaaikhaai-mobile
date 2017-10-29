// @flow

import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { List, ListItem } from 'react-native-elements'

type listItem = {
  avatar_url: string,
  name: string
}

type Props = {
  list: Array<listItem>
}

class Reviews extends Component<void, Props, void> {
  renderItem = ({ item }: { item: listItem }) => (
    <ListItem
      avatar={{ uri: item.avatar_url }}
      key={item.name}
      title={item.name}
    />
  )

  render() {
    return (
      <List containerStyle={{ marginTop: 25 }}>
        <FlatList
          data={this.props.list}
          renderItem={this.renderItem}
          keyExtractor={(item: listItem): string => item.name}
        />
      </List>
    )
  }
}

export default Reviews

import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { Icon, List, ListItem } from 'react-native-elements'

class Restaurants extends Component {
  renderItem = ({ item }) => (
    <ListItem
      avatar={{ uri: item.avatar_url }}
      key={item.name}
      title={item.name}
    />
  )

  render() {
    return (
      <List containerStyle={{ marginBottom: 20, marginTop: 25 }}>
        <ScrollView>
          <FlatList
            data={this.props.list}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.name}
          />
        </ScrollView>
      </List>
    )
  }
}

export default Restaurants

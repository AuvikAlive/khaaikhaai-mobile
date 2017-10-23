import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

class Restaurants extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="restaurant-menu" color={tintColor} />
    )
  }

  render() {
    return (
      <View style={{ marginTop: 25 }}>
        <Text>Restaurants List</Text>
      </View>
    )
  }
}

export default Restaurants

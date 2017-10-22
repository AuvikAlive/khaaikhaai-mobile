import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

class Reviews extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="badge" type="simple-line-icon" color={tintColor} />
    )
  }

  render() {
    return <Text>Reviews List</Text>
  }
}

export default Reviews

import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Icon, Card, Button } from 'react-native-elements'

import Avatar from './Avatar'

import { green, red } from '../../config/colors'

class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="account" type="material-community" color={tintColor} />
    )
  }

  state = {
    cardWidth: null
  }

  onPageLayout = event => {
    const { width } = event.nativeEvent.layout
    this.setState({ cardWidth: width })
  }

  render() {
    return (
      <Card title="My Account" onLayout={this.onPageLayout}>
        <Avatar parentWidth={this.state.cardWidth} />

        <Button
          icon={{ name: 'favorite' }}
          backgroundColor={red}
          title="Favorites"
          buttonStyle={{ marginTop: 15 }}
        />
      </Card>
    )
  }
}

export default Profile

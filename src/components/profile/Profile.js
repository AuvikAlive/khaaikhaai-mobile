import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Card, Icon } from 'react-native-elements'

import Avatar from './Avatar'
import Favorites from './Favorites'
import Reviews from './Reviews'
import Notifications from './Notifications'
import Settings from './Settings'

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
      <ScrollView>
        <Card title="My Account" onLayout={this.onPageLayout}>
          <Avatar parentWidth={this.state.cardWidth} />

          <Favorites />
          <Reviews />
          <Notifications />
          <Settings />
        </Card>
      </ScrollView>
    )
  }
}

export default Profile

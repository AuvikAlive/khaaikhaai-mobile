// @flow
import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Card, Icon } from 'react-native-elements'

import ProfileAvatar from '../profileAvatar/ProfileAvatar'
import FavoritesButton from '../buttons/FavoritesButton'
import ReviewsButton from '../buttons/ReviewsButton'
import NotificationsButton from '../buttons/NotificationsButton'
import SettingsButton from '../buttons/SettingsButton'

type OnLayoutEvent = {
  nativeEvent: {
    layout: {
      width: number
    }
  }
}

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account" type="material-community" color={tintColor} />
  )
}

class Profile extends Component {
  static navigationOptions = navigationOptions

  state = {
    cardWidth: 0
  }

  onPageLayout = (event: OnLayoutEvent) => {
    const { width } = event.nativeEvent.layout
    this.setState({ cardWidth: width })
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 25 }}>
        <Card title="My Account" onLayout={this.onPageLayout}>
          <ProfileAvatar parentWidth={this.state.cardWidth} />

          <FavoritesButton />
          <ReviewsButton />
          <NotificationsButton />
          <SettingsButton />
        </Card>
      </ScrollView>
    )
  }
}

export default Profile

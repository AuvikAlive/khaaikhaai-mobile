import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Icon, Avatar, Card, Button } from 'react-native-elements'

class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="account" type="material-community" color={tintColor} />
    )
  }

  state = {
    cardWidth: null,
    avatarWidth: null,
    avatarHeight: null
  }

  onPageLayout = event => {
    const { width } = event.nativeEvent.layout
    this.setState({ cardWidth: width })
  }

  componentDidMount() {
    Image.getSize(
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      (width, height) => {
        this.setState({ avatarWidth: width, avatarHeight: height })
      }
    )
  }

  render() {
    return (
      <Card title="My Account" onLayout={this.onPageLayout}>
        <Image
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
          }}
          style={{
            width: this.state.cardWidth,
            height:
              this.state.cardWidth *
              this.state.avatarHeight /
              this.state.avatarWidth
          }}
          resizeMode="contain"
        />
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="VIEW NOW"
        />
      </Card>
    )
  }
}

export default Profile

import React, { Component } from 'react'
import { Image } from 'react-native'

class Avatar extends Component {
  state = {
    width: null,
    height: null
  }

  componentDidMount() {
    Image.getSize(
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      (width, height) => {
        this.setState({ width, height })
      }
    )
  }

  render() {
    const { parentWidth } = this.props
    const { width, height } = this.state

    return (
      <Image
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
        }}
        style={{
          width: parentWidth,
          height: parentWidth * height / width
        }}
        resizeMode="contain"
      />
    )
  }
}

export default Avatar

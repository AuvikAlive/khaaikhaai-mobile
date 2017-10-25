import React from 'react'
import { Icon, Button } from 'react-native-elements'

import { red } from '../../theme'

const Favorite = () => (
  <Button
    icon={{ name: 'favorite' }}
    backgroundColor={red}
    title="My Favorites"
    buttonStyle={{ marginTop: 15 }}
  />
)

export default Favorite

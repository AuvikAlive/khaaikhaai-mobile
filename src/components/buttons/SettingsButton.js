import React from 'react'
import { Icon, Button } from 'react-native-elements'

import { orange } from '../../theme'

const Settings = () => (
  <Button
    icon={{ name: 'settings' }}
    backgroundColor={orange}
    title="App Settings"
    buttonStyle={{ marginTop: 15 }}
  />
)

export default Settings

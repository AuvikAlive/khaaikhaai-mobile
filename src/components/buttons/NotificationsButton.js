import React from 'react'
import { Icon, Button } from 'react-native-elements'

import { green } from '../../theme'

const Notifications = () => (
  <Button
    icon={{ name: 'notifications' }}
    backgroundColor={green}
    title="Notifications"
    buttonStyle={{ marginTop: 15 }}
  />
)

export default Notifications

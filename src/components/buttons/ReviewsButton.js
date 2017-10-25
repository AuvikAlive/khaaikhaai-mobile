import React from 'react'
import { Icon, Button } from 'react-native-elements'

import { yellow } from '../../theme'

const Reviews = () => (
  <Button
    icon={{ name: 'rate-review' }}
    backgroundColor={yellow}
    title="My Reviews"
    buttonStyle={{ marginTop: 15 }}
  />
)

export default Reviews

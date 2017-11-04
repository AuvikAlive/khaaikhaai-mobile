// @flow

import React from 'react'
import { View } from 'react-native'
import renderList from './renderList'
import { PacmanIndicator } from 'react-native-indicators'
import { red } from '../../theme'
import type { listItem } from './listItemType'

type Props = {
  list: Array<listItem>,
  navigate: (stackName: string, parameter: { restaurant: listItem }) => void
}

const Restaurants = (props: Props) => {
  const { list, navigate } = props

  return (
    <View style={{ flex: 1 }}>
      {list.length === 0 ? (
        <PacmanIndicator color={red} />
      ) : (
        renderList(list, navigate)
      )}
    </View>
  )
}

export default Restaurants

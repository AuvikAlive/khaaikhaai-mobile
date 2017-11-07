// @flow

import React from 'react'
import { View } from 'react-native'
import renderList from './renderList'
import Indicator from '../indicator/Indicator'
import type { listItem } from './listItemType'

type Props = {
  loading: boolean,
  list: Array<listItem>,
  navigate: (stackName: string, parameter: { restaurant: listItem }) => void,
  fetchRestaurants: () => void
}

const Restaurants = (props: Props) => {
  const { list, navigate, fetchRestaurants, loading } = props
  const lastItem = list.slice(-1)[0]

  return (
    <View style={{ flex: 1 }}>
      {list.length === 0 ? (
        <Indicator />
      ) : (
        renderList(list, navigate, lastItem, fetchRestaurants, loading)
      )}
    </View>
  )
}

export default Restaurants

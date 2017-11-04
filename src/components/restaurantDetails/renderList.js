// @flow

import React from 'react'
import { ListView } from 'react-native'
import renderItem from './renderItem'
import type { listItem } from './listItemType'

const renderList = (items: listItem) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  const dataSource = ds.cloneWithRows(items)

  return (
    <ListView
      dataSource={dataSource}
      renderRow={renderItem}
      keyExtractor={(item: listItem): string => item.itemID}
    />
  )
}

export default renderList

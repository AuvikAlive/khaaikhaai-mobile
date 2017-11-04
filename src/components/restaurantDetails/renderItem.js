// @flow

import React from 'react'
import { ListItem } from 'react-native-elements'
import ItemVariations from './ItemVariations'
import type { listItem } from './listItemType'

const renderItem = (item: listItem) => (
  <ListItem
    key={item.itemID}
    title={item.itemName}
    titleStyle={{ alignSelf: 'center' }}
    subtitle={
      item.itemVariations ? (
        <ItemVariations variations={item.itemVariations} />
      ) : (
        ''
      )
    }
    hideChevron={true}
  />
)

export default renderItem

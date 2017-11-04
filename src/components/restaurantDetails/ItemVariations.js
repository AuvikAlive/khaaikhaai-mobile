import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray } from '../../theme'

const ItemVariations = props => (
  <View style={styles.parent}>
    {props.variations.map((value, index) => (
      <View style={styles.container} key={index}>
        <Text style={styles.child}>{value.variationName}</Text>
        <Text style={styles.child}>{value.ratio}</Text>
        <Text style={styles.child}>৳{value.price}</Text>
      </View>
    ))}
  </View>
)

const styles = StyleSheet.create({
  parent: {
    padding: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  child: {
    textAlign: 'center',
    width: '33.33%',
    color: gray
  }
})

export default ItemVariations

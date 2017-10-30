import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ItemVariations = props => (
  <View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  child: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '33.33%'
  }
})

export default ItemVariations

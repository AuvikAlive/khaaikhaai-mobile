import React, { Component } from 'react'
import values from 'lodash/values'
import { FlatList } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import ItemVariations from './ItemVariations'

type listItem = {
  restaurantID: string,
  restaurantName: string
}

class RestaurantDetails extends Component {
  state = { display: false }

  renderItem = ({ item }: { item: listItem }) => (
    <ListItem
      key={item.itemID}
      title={item.itemName}
      titleStyle={{ alignSelf: 'center', color: 'black' }}
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

  renderList = items => (
    <FlatList
      data={items}
      renderItem={this.renderItem}
      keyExtractor={(item: listItem): string => item.itemID}
    />
  )

  componentDidMount() {
    setTimeout(() => {
      this.setState({ display: true })
    }, 0)
  }

  render() {
    const restaurant = this.props.navigation.state.params.restaurant
    const items = values(restaurant.items)
    const display = this.state.display

    return (
      <List
        containerStyle={{
          marginTop: 25
        }}
      >
        {display ? this.renderList(items) : null}
      </List>
    )
  }
}

// const RestaurantDetails = props => {
//   const restaurant = props.navigation.state.params.restaurant
//   const items = values(restaurant.items)

//   const renderItem = ({ item }: { item: listItem }) => (
//     <ListItem key={item.itemID} title={item.itemName} />
//   )

//   return (
//     <List containerStyle={{ marginTop: 25 }}>
//       <FlatList
//         data={items}
//         renderItem={renderItem}
//         keyExtractor={(item: listItem): string => item.itemID}
//       />
//     </List>
//   )
// }

export default RestaurantDetails

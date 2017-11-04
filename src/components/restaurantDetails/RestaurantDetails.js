import React, { Component } from 'react'
import values from 'lodash/values'
import { List, ListItem } from 'react-native-elements'
import renderList from './renderList'

type listItem = {
  restaurantID: string,
  restaurantName: string
}

class RestaurantDetails extends Component {
  state = { display: false }

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
        <ListItem
          title={restaurant.restaurantName}
          titleStyle={{ alignSelf: 'center' }}
          hideChevron={true}
        />
        {display ? renderList(items) : null}
      </List>
    )
  }
}

export default RestaurantDetails

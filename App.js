import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers/rootReducer'

import Restaurants from './src/components/restaurants/Restaurants'
import Tabs from './src/components/tabs/Tabs'

let store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <Tabs />
  </Provider>
)

export default App

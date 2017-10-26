import React from 'react'
import { Provider } from 'react-redux'
import Tabs from './src/components/tabs/Tabs'
import store from './src/store/store'

const App = () => (
  <Provider store={store}>
    <Tabs />
  </Provider>
)

console.disableYellowBox = true

export default App

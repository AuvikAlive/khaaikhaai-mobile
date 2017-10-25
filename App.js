import React from 'react'
import { Provider } from 'react-redux'
import Tabs from './src/components/tabs/Tabs'
import store from './src/store'

const App = () => (
  <Provider store={store}>
    <Tabs />
  </Provider>
)

export default App

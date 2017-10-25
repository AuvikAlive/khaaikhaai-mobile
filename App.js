import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers/rootReducer'
import Tabs from './src/components/tabs/Tabs'

let store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <Tabs />
  </Provider>
)

export default App

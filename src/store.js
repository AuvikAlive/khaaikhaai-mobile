import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import * as firebase from 'firebase'
import config from '../firebaseConfig'

firebase.initializeApp(config)

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
export const database = firebase.database()

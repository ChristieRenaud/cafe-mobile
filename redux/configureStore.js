import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { cats } from './cats'
import { favorites } from './favorites'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ cats, favorites }),
    applyMiddleware(
      thunk,
      // logger
    ),
  )
  return store
}

import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import reducers from './root.reducer'

export const middlewares = [logger]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store

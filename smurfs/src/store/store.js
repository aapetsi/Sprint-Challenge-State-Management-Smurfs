import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { smurfsReducer } from '../reducers/smurfs'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  smurfsReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store

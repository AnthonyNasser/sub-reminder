import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/RootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

// When in production uses redux dev tools otherwise use just use compose
const composeEnhancers =  ( composeWithDevTools ) || compose

const store = () => createStore(reducer, undefined, composeEnhancers(applyMiddleware(thunk)))

export default store
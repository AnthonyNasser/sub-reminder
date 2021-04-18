import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/RootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = composeWithDevTools || compose

const store = createStore(persistedReducer, undefined, composeEnhancers(applyMiddleware(thunk)))

export let persistor = persistStore(store)

export default () => store

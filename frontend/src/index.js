import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import { theme } from './theme'
import configureStore, { persistor } from './redux/Store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export const store = configureStore()

class App extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<Router>
							<Routes />
						</Router>
					</ThemeProvider>
				</PersistGate>
			</Provider>
		)
	}
ReactDOM.render(<App />, document.getElementById('root'))

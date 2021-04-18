import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes';
import { theme } from './theme';
import configureStore from './redux/Store'
import { Provider } from 'react-redux'

export const store = configureStore()

class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return(
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
      </Provider>
    )
  }
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
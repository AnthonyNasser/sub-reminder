import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes';
import { theme } from './theme';

class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return(
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    )
  }
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

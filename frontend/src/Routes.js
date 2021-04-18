import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from './components/styles/NavBar'
import LandingPage from './components/pages/LandingPage'
import AboutPage from './components/pages/AboutPage'
import HomePage from './components/pages/HomePage'
import HelpPage from './components/pages/HelpPage'
import NotFoundPage from './components/pages/NotFoundPage'
import SignupPage from './components/pages/SignupPage'
import LoginPage from './components/pages/LoginPage'
import ProtectedRoute from './utils/ProtectedRoute'
import InverseProtectedRoute from './utils/InverseProtectedRoute'

class Routes extends Component {
	constructor(props) {
		super(props)
		// binding
	}

	render() {
		return (
			<div>
				<NavBar />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/about" exact component={AboutPage} />
					<Route path="/help" exact component={HelpPage} />
					<InverseProtectedRoute path="/login" exact component={LoginPage} />
					<InverseProtectedRoute path="/register" exact component={SignupPage} />
					<ProtectedRoute path="/home" exact component={HomePage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		)
	}
}

export default withRouter(Routes)

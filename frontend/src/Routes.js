import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import SiteHeader from './components/nav/SiteHeader'
import LandingPage from './components/pages/LandingPage/LandingPage'
import AboutPage from './components/pages/AboutPage'
import HomePage from './components/pages/HomePage'
import HelpPage from './components/pages/HelpPage'
import NotFoundPage from './components/pages/NotFoundPage'
import SignupPage from './components/pages/SignupPage'
import LoginPage from './components/pages/LoginPage'

class Routes extends Component {
	constructor(props) {
		super(props)
		// binding
	}

	render() {
		return (
			
			<div>
				<SiteHeader />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/home" exact component={HomePage} />
					<Route path="/about" exact component={AboutPage} />
					<Route path="/help" exact component={HelpPage} />
					<Route path="/login" exact component={LoginPage} />
					<Route path="/register" exact component={SignupPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		)
	}
}

export default withRouter(Routes)

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LandingPage extends Component {
	render() {
		return (
			<div>
				<h1>HELLO IM THE LANDING PAGE!</h1>
			</div>
		)
	}
}

export default withRouter(LandingPage)

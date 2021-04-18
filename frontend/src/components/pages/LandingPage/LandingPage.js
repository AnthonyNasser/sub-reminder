import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LandingPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showLogin: false
		}
	}
	render() {
		return (
			<div>
				
			</div>
		)
	}
}

export default withRouter(LandingPage)

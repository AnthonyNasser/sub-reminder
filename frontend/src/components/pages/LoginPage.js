import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LoginPage extends Component {
	render() {
		return (
			<div>
				<h1>HELLO IM THE LOGIN PAGE!</h1>
			</div>
		)
	}
}

export default withRouter(LoginPage)

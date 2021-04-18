import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class HomePage extends Component {
	render() {
		return (
			<div>
				<h1>HELLO IM THE HOME PAGE!</h1>
			</div>
		)
	}
}

export default withRouter(HomePage)

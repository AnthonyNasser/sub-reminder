import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class AboutPage extends Component {
	render() {
		return (
			<div>
				<h1>HELLO IM THE ABOUT PAGE!</h1>
			</div>
		)
	}
}

export default withRouter(AboutPage)

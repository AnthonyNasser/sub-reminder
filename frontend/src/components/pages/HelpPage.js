import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class HelpPage extends Component {
	render() {
		return (
			<div>
				<h1>HELLO IM THE HELP PAGE!</h1>
			</div>
		)
	}
}

export default withRouter(HelpPage)

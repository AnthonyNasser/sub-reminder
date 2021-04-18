import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { logoutCurrentUser } from '../../redux/actions/SessionAction'
import { store } from '../../index'

class HomePage extends Component {
	render() {
		return (
			<div>
				<h1>HELLO IM THE HOME PAGE!</h1>
				<button onClick={() => store.dispatch(logoutCurrentUser())}>Logout</button>
			</div>
		)
	}
}

export default withRouter(HomePage)

import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const InverseProtectedRoute = (props) => {
	return (
		<Route
			component={props.isLoggedIn ? () => <Redirect to="/home" /> : props.component}
			exact={props.exact}
			to={props.path}
		/>
	)
}

const mapStateToProps = (state) => ({
	isLoggedIn: Boolean(state.session.userId),
})

export default connect(mapStateToProps)(InverseProtectedRoute)

import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const ProtectedRoute = (props) => {
	return (
		<Route
			component={props.isLoggedIn ? props.component : () => <Redirect to="/login" />}
			exact={props.exact}
			to={props.path}
		/>
	)
}

const mapStateToProps = (state) => ({
	isLoggedIn: state.session.userId,
})

export default connect(mapStateToProps)(ProtectedRoute)

import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Message from '../styles/Message'
import Loader from '../styles/Loader'
import FormContainer from '../styles/FormContainer'

class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			email: '',
			error: '',
			isLoggedIn: false,
			isLoading: true,
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount = () => {
		console.log(this.props, "props")
		this.setState({ isLoading: false })
	}

	handleSubmit = (e) => {
		e.preventDefault()
	}
	render() {
		return (
			<FormContainer>
				<h1>Sign In</h1>
				{this.state.isLoading && <Loader />}
				{this.state.error && <Message variant="danger">{this.state.error}</Message>}
				<Form onSubmit={this.handleSubmit}>
					<Form.Group controlId="email">
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Please Enter Email"
							value={this.state.email}
							onChange={(e) => this.setState({ email: e.target.value })}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Please Enter Password"
							value={this.state.password}
							onChange={(e) => this.setState({ password: e.target.value })}>
						</Form.Control>
					</Form.Group>

					<Button type="submit" variant="primary">
						Sign In
					</Button>
				</Form>

				<Row className="py-3 px-3">
					<Col>
						<Row>New to the Site?</Row>
						<Row>
							<Link to='/register'>
								Register here!
							</Link>
						</Row>
					</Col>
				</Row>
			</FormContainer>
		)
	}
}

export default withRouter(LoginPage)

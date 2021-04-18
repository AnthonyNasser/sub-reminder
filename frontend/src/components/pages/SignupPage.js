import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Message from '../styles/Message'
import Loader from '../styles/Loader'
import FormContainer from '../styles/FormContainer'

class SignupPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confPassword: '',
            message: '',
            error: '',
            isLoading: true,
        }
    }
    
	handleSubmit = (e) => {
		e.preventDefault()
		if (this.state.password !== this.state.confirmPassword) {
			this.setState({ message: 'Passwords do not match!'})
		} else {
            // LOGIN GOES HERE
        }
	}
    componentDidMount() {
        this.setState({ isLoading: false })
    }
    render()
	{return (
		<FormContainer>
			<h1>Sign Up</h1>
			{this.state.message && <Message variant='danger'>{this.state.message}</Message>}
			{this.state.error && <Message variant='danger'>{this.state.error}</Message>}
			{this.state.isLoading && <Loader />}
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId='firstName'>
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type='firstName'
						placeholder='Please Enter First Name'
						value={this.state.firstname}
						onChange={(e) => this.setState({ firstname: e.target.value })}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='lastName'>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type='lastName'
						placeholder='Please Enter Last Name'
						value={this.state.setLastName}
						onChange={(e) => this.setState({ lastname: e.target.value })}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Please Enter Email'
						value={this.state.email}
						onChange={(e) => this.setState({ email: e.target.value })}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Please Enter Password'
						value={this.state.password}
						onChange={(e) => this.setState({ password: e.target.value })}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='confirmPassword'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						value={this.state.confPassword}
						onChange={(e) => this.setState({ confPassword: e.target.value })}
					></Form.Control>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Register
				</Button>
			</Form>

			<Row className='py-3 px-3'>
				<Col>
					<Row>Already have an Account?</Row>
					<Row>
						<Link to='/login'>
							Login
						</Link>
					</Row>
				</Col>
			</Row>
		</FormContainer>
	)}
}

export default withRouter(SignupPage)
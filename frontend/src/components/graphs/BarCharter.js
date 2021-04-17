import React, { Component } from 'react'
import { BarChart, XAxis, YAxis, CartesianGrid, Legend, Bar } from 'recharts'

class BarCharter extends Component {
	render() {
		return (
			<BarChart width={2000} height={1000} data={this.props.data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" stroke="#5bc0de" />
				<YAxis stroke="#df691a" />
				<Bar dataKey="Cost" fill="#ddd6f3" label={{ fill: '#df691a', fontSize: 25 }} />
				<Legend />
			</BarChart>
		)
	}
}

export default BarCharter

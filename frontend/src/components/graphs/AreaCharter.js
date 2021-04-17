import React, { Component } from 'react'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts'

class AreaCharter extends Component {
	render() {
		return (
			<div>
				<AreaChart width={2000} height={1000} data={this.props.data}>
					<defs>
						<linearGradient id="color">
							<stop offset="30%" stopColor="#ddd6f3" stopOpacity={0.5} />
							<stop offset="70%" stopColor="#faaca8" stopOpacity={0.5} />
						</linearGradient>
					</defs>
					<XAxis dataKey="name" stroke="#5bc0de" />
					<YAxis stroke="#df691a" />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip labelStyle={{ color: '#868e96' }} />
					<Area
						type="monotone"
						dataKey="Cost"
						stroke="#5bc0de"
						fillOpacity={1}
						fill="url(#color)"
					/>
				</AreaChart>
			</div>
		)
	}
}

export default AreaCharter

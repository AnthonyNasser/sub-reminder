import React, { Component } from 'react'
import AreaCharter from './components/graphs/AreaCharter'
import BarCharter from './components/graphs/BarCharter'
import { data } from './components/graphs/data.js'

class App extends Component {
	render() {
		const data1 = data
		return (
			<div>
				<AreaCharter data={data1} />
				<BarCharter data={data1} />
			</div>
		)
	}
}

export default App;

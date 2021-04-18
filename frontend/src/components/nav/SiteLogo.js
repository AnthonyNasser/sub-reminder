import React from 'react'
import styled from 'styled-components'

const Logo = (props) => (
	<SiteLogo src="/logo192.png" onClick={() => window.location.assign(props.homePath)}></SiteLogo>
)

const SiteLogo = styled.img`
	cursor: pointer;
	max-width: 170px;
	margin: 1rem;
	height: auto;
	max-height: 40px;
	width: 100%;
	z-index: 1000;
`
export default Logo

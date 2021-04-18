import React from 'react'
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'
import SiteLogo from './SiteLogo'
import { theme } from '../../theme'

class SiteHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: null,
		}
	}
	render() {
		return (
			<Header>
				<NavWrapper>
					<SiteLogo homePath="/" />
					<Nav>
						<div id="menu">
							<Link to="/">Home</Link>
							<Link to="/about">About</Link>
							<Link to="/help">Help</Link>
							<Link to="/contact">Contact</Link>
                            <Link to="/login">Login</Link>
						</div>
					</Nav>
				</NavWrapper>
			</Header>
		)
	}
}

const Header = styled.header`
	z-index: 100;
	box-shadow: 0 1px 14px rgba(0, 0, 0, 0.1);
`

const Nav = styled.nav`
	#mobile {
		display: none;
	}
	#menu {
		button {
			min-height: 82px;
		}
	}
	@media screen and (max-width: ${theme.breakPoints.tablet}) {
		display: inline-flex;
		#notifications .notification {
			display: none;
		}
		#menu {
			display: none;
			&.open {
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				background: #f7f7f7;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
		}
		#mobile {
			display: flex;
			svg path {
				fill: #555555;
			}
		}
	}
`
const NavWrapper = styled.div`
	display: flex;
	margin: auto;
	max-width: ${theme.maxWidth}px;
	justify-content: space-between;
	a,
	button {
		outline: 0;
		border: none;
		color: #000000;
		font-size: 1rem;
		cursor: pointer;
		position: relative;
		padding: 1rem 2rem;
		transition: all 0.3s;
		text-decoration: none;
		background-color: transparent;
		display: inline-flex;
		min-height: 50px;
		height: auto;
		justify-content: center;
		align-items: center;

		@media screen and (max-width: 890px) and (min-width: ${theme.breakPoints.tablet}) {
			padding: 1rem 1.5rem;
		}

		@media screen and (max-width: ${theme.breakPoints.midMobile}) {
			padding: 0.5rem 1rem;
		}

		.notification {
			display: none;
		}
		&:hover {
			.notification {
				display: block;
			}
			background-color: ${(props) => (!props.active ? 'whitesmoke' : theme.color.secondary)};
		}
	}
`
const Title = styled.div`
	display: block;
	font-size: 20px;
	font-weight: 600;
`

const CloseButton = styled.div`
	display: inline-block;
	float: right;
	color: ${theme.color.redapple};
	fontweight: 700;
	fontsize: 26px;
	cursor: pointer;
`

export default withRouter(SiteHeader)

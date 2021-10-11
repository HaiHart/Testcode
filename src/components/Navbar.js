import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.svg"
import { ButtonContainer, NavWrapper} from './Styling'

export default class Navbar extends Component {

	
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link to='/'>
					<img src={logo} alt="home" className="navbar-brand" />
				</Link>
				
				<ul className="navbar-nav align-items-center" >
					<li className="nav-item ms-5">
						<Link to="/" className="nav-link">
						store
						</Link>
					</li>
				</ul>
						<Link to='/Cart' className="ms-auto">
					<ButtonContainer>
						<span className="me-1">
							<i className="fas fa-hamburger" />
						</span>
						my cart
					</ButtonContainer>
				</Link>
			</NavWrapper>
		)
	}
}

import React from 'react';
import {nav, Dropdown, NavItem, Icon} from 'react-materialize'
import Logo from '../../assets/images/logo_header.png';
import './index.css';

const userlogged = {
	login: "ADMINISTRADOR"
}

class NavBarSga extends React.Component {

	render() {
		return (
			<nav className="navBar">
				<img src={Logo} className="logo-navbar" alt="logo"/>
				<span className="spanNavBar"></span>
					<div className="button-home-user">
						<Icon className="button-home-user-icon">home</Icon>
				<Dropdown trigger={
				    	<div className="button-home-user-text">{userlogged.login}</div>
				  }>
				  <NavItem className="item-button-home-user">Opción 1</NavItem>
				  <NavItem className="item-button-home-user">Opción 2</NavItem>
				  <NavItem className="item-button-home-user" divider />
				  <NavItem className="item-button-home-user" href="/">Logout</NavItem>
				</Dropdown>
					</div>
			</nav>
		);
	}
}


export default NavBarSga;
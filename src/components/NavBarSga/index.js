import React from 'react';
import {nav, Dropdown, NavItem, Icon} from 'react-materialize'
import Logo from '../../assets/images/logo_header.png';
import ListaActuacions from '../Modals/ListaActuacion'
import './index.css';

const userlogged = {
	login: "Administrador"
}

class NavBarSga extends React.Component {

	render() {
		return (
			<nav className="navBar">
				<img src={Logo} className="logo-navbar" alt="logo"/>
				<div>	
					<div className="button-home-user2">
						<Icon className="button-home-user-icon">book</Icon>
						<Dropdown trigger={
						    	<div className="button-home-user-text">Actuaciones</div>
						  }>
						  <ListaActuacions tipo="obra" />
						  <ListaActuacions tipo="ord" />
						  <ListaActuacions tipo="ext" />
						</Dropdown>
					</div>
					<div className="button-home-user">
						<Icon className="button-home-user-icon">home</Icon>
						<Dropdown id="drop_user" trigger={
						    	<div className="button-home-user-text">{userlogged.login}</div>
						  }>
						  <NavItem className="item-button-home-user">Administración</NavItem>
						  <NavItem className="item-button-home-user">Documentación</NavItem>
						  <NavItem className="item-button-home-user">Informes</NavItem>
						  <NavItem className="item-button-home-user" divider />
						  <NavItem className="item-button-home-user" href="/">Logout</NavItem>
						</Dropdown>
					</div>
				</div>
			</nav>
		);
	}
}


export default NavBarSga;
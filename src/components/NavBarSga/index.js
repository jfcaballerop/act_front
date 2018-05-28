import React from 'react';
import { Dropdown, NavItem, Icon } from 'react-materialize'
import Logo from '../Global/images/logo_header.png';
import ListaActuacions from '../Modals/ListaActuacion'
import './index.css';

const userlogged = {
	login: "Administrador"
}

class NavBarSga extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			logged: true,
			administracion: props.administracion
		}
	}


	cerrarSession = event => {
		sessionStorage.clear();
		this.setState({ logged: false });
		window.location.href = '/'
	};

	render() {
		return (
			<nav className="navBar">
				<img src={Logo} className="logo-navbar" alt="logo" />
				<div>
					{this.state.administracion === false ?
						<div className="button-home-user2">
							<Dropdown className="dropdown-navbar" trigger={
								<div className="bloque_dropdown">
									<Icon className="button-home-user-icon">assignment</Icon>
									<div className="button-home-user-text">Actuaciones</div>
								</div>
							}>
								<li className="item-button-home-user2"><ListaActuacions icon="filter_1" tipo="obra" /></li>
								<li className="item-button-home-user2"><ListaActuacions icon="filter_2" tipo="ord" /></li>
								<li className="item-button-home-user2"><ListaActuacions icon="filter_3" tipo="ext" /></li>
							</Dropdown>
						</div> : <ul className="button-home-user-text">
							<li className="link-admin-nav" onClick={() => this.props.history.push("/administracion/users")}>Usuarios</li>
						</ul>
					}
					<div className="button-home-user">
						<Dropdown className="dropdown-navbar" id="drop_user" trigger={
							<div className="bloque_dropdown">
								<Icon className="button-home-user-icon">assignment_ind</Icon>
								<div className="button-home-user-text">{userlogged.login}</div>
							</div>
						}>
							<NavItem className="item-button-home-user" onClick={() => this.props.history.push("/administracion/users")}><Icon>settings</Icon>Administración</NavItem>
							<NavItem className="item-button-home-user" onClick={() => this.props.history.push("/home")}><Icon>home</Icon>Home</NavItem>
							<NavItem className="item-button-home-user"><Icon>description</Icon>Documentación</NavItem>
							<NavItem className="item-button-home-user"><Icon>content_paste</Icon>Informes</NavItem>
							<NavItem className="item-button-home-user" divider />
							<NavItem className="item-button-home-user" onClick={() => this.cerrarSession()}><Icon>close</Icon>Logout</NavItem>
						</Dropdown>
					</div>
				</div>
			</nav>
		);
	}
}


export default NavBarSga;
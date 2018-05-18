import React from 'react';
import {SideNav,
Button,
SideNavItem} from 'react-materialize'
import './index.css';
import ListaActuacions from '../Modals/ListaActuacion'

class MenuActuacions extends React.Component {

	render() {
		return (
			<SideNav className="menu-lateral"
			  trigger={<Button className="button-nav">Menu</Button>}
			  options={{ closeOnClick: true }}
			  >
			  <label className="title-menu-options">Actuaciones</label>
			  <SideNavItem  divider />


			</SideNav>
		);
	}
}





export default MenuActuacions;
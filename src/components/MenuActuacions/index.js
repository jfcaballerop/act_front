import React from 'react';
import {SideNav,
Button,
SideNavItem,Icon} from 'react-materialize'
import './index.css';
import ListaActuacions from '../Modals/ListaActuacion'

class MenuActuacions extends React.Component {

	render() {
		return (
			<SideNav
			  trigger={<Button className="button-nav">Menu</Button>}
			  options={{ closeOnClick: true }}
			  >
			  <label>Actuaciones</label>
			  <SideNavItem divider />
			  <ListaActuacions tipo="obra" />
			  <ListaActuacions tipo="ext" />
			  <ListaActuacions tipo="ord" />

			</SideNav>
		);
	}
}





export default MenuActuacions;
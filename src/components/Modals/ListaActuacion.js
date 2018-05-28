import React from 'react';
import { Button, Modal, SideNavItem, Icon } from 'react-materialize'
import InfoModal from './Info'
import axios from 'axios'
import ROUTESNAME from '../../services/routesName.js'
import './index.css';

// const lista_ord = []
const lista_ext = []
const lista_obr = []


class ListaActuacion extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tipo: this.props.tipo,
			titulo: ""
		}
	}
	getActConsOrdList = () => {
		axios.get(ROUTESNAME.getActConsOrd(), ROUTESNAME.getSessionToken('sessionUserSga'))
			.then((response) => {
				if (response.status === 200) {
					this.setState({ lista: response.data })
				} else {
					console.log('Error response')
				}

				console.log('State ListaActuacion2', this.state)

			});
	}

	componentDidMount() {
		if (this.state.tipo === "obra") {
			this.setState({ lista: lista_obr, titulo: "Obra" })
		} else if (this.state.tipo === "ext") {
			console.log("entra")
			this.setState({ lista: lista_ext, titulo: "Conservación Extraordinaria" })
		} else {
			this.getActConsOrdList()
			this.setState({ titulo: "Conservación Ordinaria" })
			console.log('State ListaActuacion1', this.state)
		}
	}

	render() {
		console.log('Render::', this.state.lista)
		return (
			<Modal
				header={this.state.titulo}
				fixedFooter
				actions={
					<div>
						<Button flat modal="close" waves="light">Close</Button>
						<Button modal="close" waves="light" className="boton red" ><Icon left>delete</Icon>delete</Button>
						<Button modal="close" waves="light" className="boton amber darken-4" ><Icon left>add</Icon>Nuevo</Button>
					</div>
				}
				trigger={<SideNavItem href='#!icon'><Icon>{this.props.icon}</Icon>{this.state.titulo}</SideNavItem>}>
				{this.state.lista ? <InfoModal items={this.state.lista} /> : ""}
			</Modal>
		);
	}
}

export default ListaActuacion;
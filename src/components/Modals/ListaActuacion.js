import React from 'react';
import { Modal, SideNavItem, Icon } from 'react-materialize'
import InfoModal from './Info'
import axios from 'axios'
import ROUTESNAME from '../../services/routesName.js'

const lista_ord = ["act1", "act2", "act3"]
const lista_ext = ["ext1", "ext2", "ext3"]
const lista_obr = ["obr1", "obr2", "obr3"]


class ListaActuacion extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tipo: this.props.tipo,
			titulo: "",
			lista: []
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
			});
	}

	componentWillMount = () => {



		if (this.state.tipo === "obra") {
			this.setState({ lista: lista_obr, titulo: "Obra" })
		} else if (this.state.tipo === "ext") {
			console.log("entra")
			this.setState({ lista: lista_ext, titulo: "Conservación Extraordinaria" })
		} else {
			this.getActConsOrdList()
			this.setState({ titulo: "Conservación Ordinaria" })
		}

	}

	render() {
		console.log(this.state.lista)
		return (
			<Modal
				header={this.state.titulo}
				actions=""
				trigger={<SideNavItem href='#!icon'><Icon>{this.props.icon}</Icon>{this.state.titulo}</SideNavItem>}>
				<InfoModal items={this.state.lista} />
			</Modal>
		);
	}
}

export default ListaActuacion;
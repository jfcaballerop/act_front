import React from 'react';
import { Modal,SideNavItem } from 'react-materialize'
import InfoModal from './Info'

const lista_ord = ["act1","act2","act3"]
const lista_ext = ["ext1","ext2","ext3"]
const lista_obr = ["obr1","obr2","obr3"]

class ListaActuacion extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tipo: this.props.tipo,
			titulo: "",
			lista: []
		}
	}

	componentWillMount = () => {
		if(this.state.tipo === "obra"){
			this.setState({lista: lista_obr, titulo: "Obra"})
		}else if(this.state.titulo === "ext"){
			this.setState({lista: lista_ext, titulo: "Conservacion Extraordinaria"})
		}else{
			this.setState({lista: lista_ord, titulo: "Conservacion Ordinaria"})
		}
	
	}

	render() {
		return (
		<Modal
		header={this.state.titulo}
		trigger={<SideNavItem href='#!icon' icon='assignment'>{this.state.titulo}</SideNavItem>}>
			<InfoModal items={this.state.lista} />
		</Modal>
		);
	}
}

export default ListaActuacion;
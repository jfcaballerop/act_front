// Imports
import React from 'react';
import axios from 'axios';

// Assets
import '../Global/css/NavBarSga.css';

// Components
import NavBarSga from '../NavBarSga'
import ConentListAdmin from '../ContentListAdmin'
import ConentNewUpdateAdmin from '../ContentNewUpdateAdmin'
import ContentData from '../ContentData'
import SearchHeader from '../Generics/SearchHeader';
import InfoModal from '../Modals/Info'


// Services
import ROUTESNAME from '../../services/routesName.js'

// const lista_ord = []
const lista_ext = []
const lista_obr = []
class GenericListData extends React.Component {

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
					this.setState((prevState, props) => ({
						lista: response.data
					}))
				} else {
					// console.log('Error response')
				}

				// console.log('State ListaActuacion2', this.state)

			});
	}
	delActConsOrdList = (item) => {
		axios.delete(ROUTESNAME.delActConsOrd(item._id.$oid), ROUTESNAME.getSessionToken('sessionUserSga'))
			.then((response) => {
				if (response.status === 204) {
					// OK
					var array = [...this.state.lista]; // make a separate copy of the array
					var index = array.indexOf(item)
					array.splice(index, 1);
					window.Materialize.toast('Actuacion borrada: ' + item.code, 4000)
					this.setState({ lista: array });
				} else {

					// console.log('Error response')
				}

				// console.log('State ListaActuacion2', this.state)

			});
	}

	componentDidMount() {
		// console.log('componentDidMount GenericListData');
		if (this.state.tipo === "obra") {
			this.setState({ lista: lista_obr, titulo: "Obra" })
		} else if (this.state.tipo === "ext") {
			// console.log("entra")
			this.setState({ lista: lista_ext, titulo: "Conservación Extraordinaria" })
		} else {
			this.getActConsOrdList()
			this.setState({ titulo: "Conservación Ordinaria" })
			// console.log('State ListaActuacion1', this.state)
		}
	}
	handleAction = (item, action, e) => {
		e.preventDefault()
		// console.log('handleAction', item._id.$oid, action)
		switch (action) {
			case 'delete':
				this.delActConsOrdList(item);
				break;

			default:
				break;
		}
	}


	render() {
		return (
			<div className="section-data">
				<header><SearchHeader title="Filtrar:" /></header>
				<section>
					{this.state.lista ? <InfoModal handler={this.handleAction} items={this.state.lista} /> : ""}
				</section>
				<footer></footer>
				{/* <Header history={this.props.history} administracion={true}/> */}
			</div>
		);
	}
}

export default GenericListData;
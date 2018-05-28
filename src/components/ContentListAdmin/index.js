import React from 'react';
import './index.css';
import axios from 'axios';
import { Button } from 'react-materialize';
import TableContainer from '../TableContainer';
import SearchHeader from '../Generics/SearchHeader';
import ROUTESNAME from '../../services/routesName.js'

class ContentListAdmin extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			listaContenido: ""
		}

	}

	componentDidMount(){
		this.setState({listaContenido: this.getUsersList()})
	}

	getUsersList =  () =>{
		axios.get(ROUTESNAME.showusers(),ROUTESNAME.getSessionToken('sessionUserSga'))
		.then((response) => {
			if(response.status === 200){
				this.setState({listaContenido: response.data})
			}
		});
	}

	render() {
		let self = this
		return (
			<div>
				<section className="section-user">
					<SearchHeader title="Filtrar usuario:" />
					{ this.state.listaContenido ? <TableContainer history={this.props.history} lista={this.state.listaContenido}/> : "" }
					<Button className="new-user-button" onClick={() => this.props.history.push('/administracion/users/new')} type="submit" >Nuevo usuario</Button>
				</section>
			</div>
		);
	}
}

export default ContentListAdmin;
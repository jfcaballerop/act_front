import React from 'react';
import './index.css';
import axios from 'axios';
import { Button } from 'react-materialize';
import TableContainer from '../TableContainer';
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


	render() {
		return (
			<div>
				<section className="section-user">
					<div className="admin-user-container">
						<form className="admin-user-form-container">
							<label>filtar usuario: </label>
							<input type="text" name="user_search" className="input-login" />
						</form>
						<Button className="new-user-button" onClick={() => console.log(this.props.history.push('/administracion/users/new'))} type="submit" >Nuevo usuario</Button>
					</div>
					{ this.state.listaContenido ? <TableContainer lista={this.state.listaContenido}/> : "" }

				</section>
			</div>
		);
	}
}

export default ContentListAdmin;
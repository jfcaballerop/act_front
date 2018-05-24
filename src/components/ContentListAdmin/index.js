import React from 'react';
import './index.css';
import axios from 'axios';
import { Button } from 'react-materialize';
import TableContainer from '../TableContainer';
import ROUTESNAME from '../../services/routesName.js'



const DATA = [
	{
		"_id": {
			"$oid": "5b029cd2c7a6d60001b86c6b"
		},
		"login": "admin",
		"name": "admin",
		"password_digest": "$2a$10$V76TfqO4KyoHDBYtn5FiR.i5BIU8ZYh.W6mcYFmNJ/cmrWu92jPpq"
	}
]

class ContentListAdmin extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			listaContenido: ""
		}

	}

	getUsersList = () => {
		axios.get(ROUTESNAME.showusers(), ROUTESNAME.getSessionToken('sessionUserSga'))
			.then((response) => {
				if (response.status === 200) {
					this.setState({ listaContenido: response.data })
				}
			});
	}

	render() {
		return (
			<div>
				<section className="section-user">
					<div className="admin-user-container">
						<form className="admin-user-form-container">
							<label>filtar usuario: </label>
							<input type="text" name="user_search" className="input-login" />
						</form>
						<Button className="new-user-button" type="submit" >Nuevo usuario</Button>
					</div>
					<TableContainer lista={this.state.listaContenido} />
				</section>
			</div>
		);
	}
}

export default ContentListAdmin;
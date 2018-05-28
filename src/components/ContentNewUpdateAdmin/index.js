import React from 'react';
import {Button, Toast} from 'react-materialize';
import axios from 'axios';
import ROUTESNAME from '../../services/routesName.js'
import './index.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ContentNewUpdateAdmin extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			option_select: ""
		}	
	}

	submit = event => {
		event.preventDefault();
		axios.post(ROUTESNAME.newuser(),{user:{
			name: this.refs.name.value,
			login: this.refs.login.value,
			password: this.refs.password.value,
			password_confirmation: this.refs.password_confirmation.value,
			roles: [this.refs.roles.value]
		}},ROUTESNAME.getSessionToken('sessionUserSga'))
		.then( response => {
			if (response.status === 201){
				this.refs.name.value = ""
				this.refs.login.value = ""
				this.refs.password.value = ""
				this.refs.password_confirmation.value = ""
				this.setState({option_select: ""})
				window.Materialize.toast('Usuario creado con exito', 4000)
			}
		}).catch(error => {
			window.Materialize.toast(error, 4000)
		});
		
	}

	handleChange = (event) => {
		this.setState({option_select: event.value})
	}

	getTitle = () => {
		let url_seccion = this.props.history.location.pathname.split('/')[2]
		let url_method = this.props.history.location.pathname.split('/')[3]

		if(url_seccion === "users")
			if(url_method === "new")
				return "Nuevo usuario"
			else
				return "Editar usuario"
	}

	render() {
		return (
			<div> 
				<section className="section-user">
					<h1>- {this.getTitle()} -</h1>
					<form className="admin-user-form-container-new" onSubmit={this.submit}>
						<p>Nombre</p>
						<input className="input-login input-field-admin" type="text" required name="name"ref="name" />
						<p>Login</p>
						<input className="input-login input-field-admin" type="text" required name="login"ref="login" />
						<p>Password</p>
						<input className="input-login input-field-admin" type="password" required name="password"ref="password" />
						<p>Re-password</p>
						<input className="input-login input-field-admin" type="password" required name="re-password" ref="password_confirmation" />
						<p>Roles</p>
						 <Select
						 	className="input-login input-field-admin"
					        name="roles"
					        ref="roles"
					        value={this.state.option_select}
        					onChange={this.handleChange}
					        options={[
					          { value: 'admin', label: 'admin' },
					        ]}
					      />
						<Button className="new-user-button new-user-button-submit" type="submit" >crear usuario</Button>
					</form>
				</section>
			</div>
		);
	}
}

export default ContentNewUpdateAdmin;
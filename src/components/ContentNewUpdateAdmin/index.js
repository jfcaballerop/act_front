import React from 'react';
import {Button, Toast} from 'react-materialize';
import axios from 'axios';
import ROUTESNAME from '../../services/routesName.js'
import '../Global/css/ContentNewUpdateAdmin.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ContentNewUpdateAdmin extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			option_select: (this.props.usuario.roles.length > 0 ? this.props.usuario.roles[0].code : ""),
			user: this.props.usuario
		}	
	}

	submit = event => {
		event.preventDefault();
		if(this.props.usuario === undefined){
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
		}else{
			console.log(this.state.user)
			/*
			axios.put(ROUTESNAME.getuser(this.state.user.id.$oid),{user:{
				name: this.refs.name.value,
				login: this.refs.login.value,
				password: this.refs.password.value,
				password_confirmation: this.refs.password_confirmation.value,
				roles: [this.refs.roles.value]
			}},ROUTESNAME.getSessionToken('sessionUserSga'))
			.then( response => {
				if (response.status === 200){
					window.Materialize.toast('Usuario modificado con exito', 4000)
				}
			}).catch(error => {
				window.Materialize.toast(error, 4000)
			});*/
		}
		
	}

	handleChange = (event) => {
		this.setState({option_select: event.value})
	}

	handlerForm = (event) => {
		var newState = this.state.user; 
		newState[event.target.name] = event.target.value;
		console.log(newState)
		this.setState(newState);
	}

	render() {
		let name = this.state.user.name.toString()
		
		return (
			<div> 
				{this.props.header}
				<form className="admin-user-form-container-new" onSubmit={this.submit}>
					<p>Nombre</p>
					<input className="input-login input-field-admin" type="text" required name="name"ref="name" value={this.state.user.name} onChange={this.handlerForm } />
					<p>Login</p>
					<input className="input-login input-field-admin" type="text" required name="login"ref="login" value={this.state.user.login} onChange={this.handlerForm } />
					<p>Password</p>
					<input className="input-login input-field-admin" type="password" required name="password"ref="password"  />
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
			</div>
		);
	}
}

export default ContentNewUpdateAdmin;
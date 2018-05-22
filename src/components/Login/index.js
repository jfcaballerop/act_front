import React from 'react';
import axios from 'axios';
import Logo from '../../assets/images/logo_header.png';
import LogoInes from '../../assets/images/logo_i3met.png';
import jwtDecode from 'jwt-decode'
import ROUTESNAME from '../../services/routesName.js'
import {
	Redirect
} from 'react-router';
import {
	Button
} from 'react-materialize';
import './index.css'

class Login extends React.Component {

		constructor(props) {
			super(props)
			this.state = {
				login: false,
				error: false
			}
		}


		submit = event => {
			event.preventDefault();
			console.log(ROUTESNAME)
			axios.post(ROUTESNAME.autenticate(),{
				login: this.refs.login.value,
				password: this.refs.pass.value
			}).then(response => {
					let sessionObject, resultado

					if (response.status === 200) {
						resultado = jwtDecode(response.data.auth_token)

						sessionObject = {
							expiresAt: resultado["exp"],
							user:{
								token: response.data.auth_token
							}
						}
						sessionStorage.setItem('sessionUserSga', JSON.stringify(sessionObject));
						this.setState({
							login: true,
							error: false
						});
					} else {
						this.setState({
							login: false,
							error: true
						})
						this.refs.login.value = ""
						this.refs.pass.value = ""
					}
				})
				.catch(error => {
					this.setState({
						login: false,
						error: true
					})
					this.refs.login.value = ""
					this.refs.pass.value = ""
				});
		}


		render() {
			if (this.state.login) {
				return ( <div>
						<Redirect to="/Home" />
					</div>);
				}
				else {
					return (
						<div>
							<img src = {Logo} className="logo" alt = "logo" />
							<div className="parent" >
							<form className="form_login" onSubmit={this.submit}>
							<label> LOGIN </label>
							<input className="input-login" type="text" ref="login"/>
							<br />
							<label> PASSWORD </label>
							<input className="input-login" type="password" ref="pass"/>
							<Button className="login-button" type = "submit" > login </Button>
								<br /> 
								{this.state.error && <span className="error-span" > Credenciales no validas </span>} 
								<div class = "form-login-footer">
									<p> Developed by <br />
									<a href="https://ines.es/"> INES Ingenieros Consultores </a>
									</p> <img src={LogoInes} className="logo-ines"alt = "logo"/>
								</div>
							</form>
							</div> 
						</div>
						);
					}
				}
}
			

				export default Login;
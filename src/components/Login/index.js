import React from 'react';
import axios from 'axios';
import Logo from '../../assets/images/logo_header.png';
import LogoInes from '../../assets/images/logo_i3met.png';
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
			let url = "http://brooklyn-bridge.i3met.com:4000/api/v1/users/5e0aa691432d5a"
			if (this.refs.login.value === "admin" && this.refs.pass.value === "admin") {
				url = 'http://brooklyn-bridge.i3met.com:4000/api/v1/users/5afda9c981adc40001eb2123'
			}
			axios.get(url)
				.then(response => {
					console.log(response)
					if (response.data === "Error") {
						this.setState({
							login: false,
							error: true
						})
						this.refs.login.value = ""
						this.refs.pass.value = ""
					} else {
						this.setState({
							login: true,
							error: false
						})
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



			console.log(this.state.login)
		}


		render() {
				if (this.state.login) {
					return ( <
						div >
						<
						Redirect to = "/Home" / >
						<
						/div>);
					}
					else {
						return ( <
							div >
							<
							img src = {
								Logo
							}
							className = "logo"
							alt = "logo" / >
							<
							div className = "parent" >
							<
							form className = "form_login"
							onSubmit = {
								this.submit
							} >
							<
							label > USERNAME < /label> <
							input className = "input-login"
							type = "text"
							ref = "login" / >
							<
							br / >
							<
							label > PASSWORD < /label> <
							input className = "input-login"
							type = "password"
							ref = "pass" / >
							<
							Button className = "login-button"
							type = "submit" > login < /Button> <
							br / > {
								this.state.error && < span className = "error-span" > Credenciales no validas < /span>} <
								div class = "form-login-footer" >
								<
								p > Developed by < br / >
								<
								a href = "https://ines.es/" > INES Ingenieros Consultores < /a> <
								/p> <
								img src = {
									LogoInes
								}
								className = "logo-ines"
								alt = "logo" / >
								<
								/div> <
								/form> <
								/div> <
								/div>
							);
						}
					}
				}

				export default Login;
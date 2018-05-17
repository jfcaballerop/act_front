import React from 'react';
import axios from 'axios';
import Logo from '../../assets/images/logo_header.png';
import LogoInes from '../../assets/images/logo_i3met.png';
import {Redirect} from 'react-router';
import {Button} from 'react-materialize';
import './index.css'
class Login extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			login: false
		}
	}

	submit = event => {
		event.preventDefault();   		
		let url = "http://brooklyn-bridge.i3met.com:3000/users/5afc60e0aa691432d5a"
		if(this.refs.login.value === "admin" && this.refs.pass.value === "admin"){
	    	url = 'http://brooklyn-bridge.i3met.com:3000/users/5afc60e0aa69090001432d5a'
	    }


    axios.get(url)
    .then( response =>  {
      console.log(response)
      if(response.data === "Error"){	
  			this.setState({login: false})
      }else{
  			this.setState({login: true})
      }
    })
    .catch( error => {
      console.log(error);
    });



   		console.log(this.state.login)
	}


	render() {
		if(this.state.login){
		return (
			<div>
			<Redirect to="/Home" />
			</div>);
		}else{
			return(
				<div>
					<img src={Logo} className="logo" alt="logo"/>
					<div className="parent">
						<form className="form_login" onSubmit={this.submit}>
							<label>USERNAME</label>
							<input className="input-login" type="text" ref="login" />
							<br />
							<label>PASSWORD</label>
							<input className="input-login" type="password" ref="pass" />
							<Button className="login-button" type="submit"> login </Button>

							<div class="form-login-footer">
		                        <p>Developed by <br/>
		                            <a href="https://ines.es/"> INES Ingenieros Consultores</a>
		                        </p>
            					<img src={LogoInes} className="logo-ines" alt="logo"/>
		                    </div>
						</form>
					</div>
				</div>
			);
		}
	}
}

export default Login;


import React from 'react';
import { withRouter } from 'react-router-dom';

import NavBarSga from '../NavBarSga'
import ConentListAdmin from '../ContentListAdmin'
import ConentNewUpdateAdmin from '../ContentNewUpdateAdmin'
import ContentData from '../ContentData'
import SearchHeader from '../Generics/SearchHeader';
import Header from '../Global/Header';
import axios from 'axios';
import ROUTESNAME from '../../services/routesName.js'
import { withRouter } from 'react-router-dom';


class AdminUser extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			objeto: 0
		}
	}

	componentWillReceiveProps(cosa){
		this.setState({algo: cosa})
	}

	getComponentAdmin = () => {
		const { location, history, match } = this.props;
		let header, footer, body, objeto
		if (match.params.id != undefined){
			header=<h1>- Editar usuario -</h1>
			axios.get(ROUTESNAME.getuser(match.params.id),ROUTESNAME.getSessionToken('sessionUserSga'))
				.then((response) => {
					if (response.status === 200) {
						objeto = response.data
						body = <ConentNewUpdateAdmin usuario={objeto} />
						this.setState({objeto: 
							<ContentData 
								header={header}
								body={body}
								footer={footer}
							/>
							})
					}
				});
			footer = ""
		} else if (match.params.method === "new"){
			header=<h1>- Nuevo usuario -</h1>
			body =  <ConentNewUpdateAdmin />
			footer = ""
		}
		else{
			body = <ConentListAdmin />
			header = <SearchHeader title="Filtrar usuario:" />
			footer = ""
		}


		this.setState({objeto: 
			<ContentData
				header={header}
				body={body}
				footer={footer}
			/>
			})
	}

	render() {
		return (
			<div className="content">
				{this.state.objeto === 0 ?  this.getComponentAdmin() : this.state.objeto }
			</div>
		);
	}
}


export default withRouter(AdminUser);

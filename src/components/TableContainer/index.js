import React, {Component} from 'react';
import {Button, Pagination, Modal, Icon} from 'react-materialize';
import { withRouter } from 'react-router-dom';
import '../Global/css/TableContainer.css';
import axios from 'axios';
import ROUTESNAME from '../../services/routesName.js'


class TableContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			lista: props.lista,
			pagina: 1
		}
		const { location, history } = this.props;
	}

	changeList = page => {
		this.setState({ pagina: page })
	}

	deleteItem = (item) => {
		axios.delete(ROUTESNAME.getuser(item._id.$oid), ROUTESNAME.getSessionToken('sessionUserSga'))
			.then((response) => {
				if (response.status === 204) {
					var array = [...this.state.lista]; // make a separate copy of the array
					var index = array.indexOf(item)
					array.splice(index, 1);
					window.Materialize.toast('Usuario borrado: ' + item.name, 4000)
					this.setState({ lista: array });
				}
			})
	}

	calcularPaginas = () => {
		let paginas
		if (this.state.lista.length % 6 === 0 && this.state.lista.length <= 6) {
			paginas = this.state.lista.length / 6
		} else {
			paginas = (this.state.lista.length / 6) + 1
		}
		return paginas
	}

	render() {
		// let self = this
		const { children, match, location, history } = this.props;

		return (

			<div>
				<table className="table-users-admin">
					<tbody>
						<tr>
							<th>Login</th>
							<th>Name</th>
							<th>Roles</th>
							<th colSpan="3">Opciones</th>
						</tr>
						{this.state.lista.slice((this.state.pagina * 6) - 6, (this.state.pagina * 6)).map((row, key) =>
							<tr key={key}>
								<td>{row.login}</td>
								<td>{row.name}</td>
								<td>{row.roles_val.map((role) => role.code)}</td>
								<td colSpan="3">
									<tr colSpan="3" className="tr-options-admin">
										<td><Button className="new-user-button options-table-admin" onClick={() => history.push('/administracion/users/edit/' + row._id.$oid, this.props.handlerUpdateParent())}><Icon>edit</Icon>Editar</Button></td>

										<td>
											<Modal
												header="Borrando usuario"
												actions={
													<footer>
														<Button modal="close" onClick={() => this.deleteItem(row)} className="new-user-button options-table-admin">Aceptar</Button>
														<Button modal="close" className="new-user-button options-table-admin">Cancelar</Button>
													</footer>}
												trigger={<Button className="new-user-button options-table-admin"  ><Icon>delete</Icon>borrar</Button>}>
												<p>¿Estas seguro de que quieres elimiar al usuario <b>{row.login}</b>?</p>
											</Modal>

										</td>
									</tr>
								</td>
							</tr>)}
					</tbody>
				</table>
				<footer className="pagination">
					{(this.state.lista.length > 1) ? <Pagination items={this.calcularPaginas()} onSelect={(page) => this.changeList(page)} activePage={this.state.pagina} maxButtons={8} /> : ""}
				</footer>
			</div>
		);
	}
}

export default withRouter(TableContainer);

import React, {Component} from 'react';
import {Button, Pagination, Modal, Icon} from 'react-materialize';
import './index.css';

class TableContainer extends Component {

	constructor(props){
		super(props);
		this.state = {
			lista: props.lista,
			pagina: 1
		}
	}

	changeList = page => {
		this.setState({pagina: page})
	}

	render() {
		// let self = this
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
					{ this.state.lista.slice((this.state.pagina*6)- 6,(this.state.pagina*6)).map((row,key) => 
						<tr key={key}>
							<td>{row.login}</td>
							<td>{row.name}</td>
							<td>{row.roles_val.map((role) => role.code)}</td>
							<td colSpan="3">
								<tr colSpan="3" className="tr-options-admin">
									<td><Button className="new-user-button options-table-admin" onClick={() => this.props.history.push('/administracion/users/edit/'+row._id.$oid)}><Icon>edit</Icon>Editar</Button></td> 

									<td>
										<Modal
										  header="Borrando usuario" 
										  actions={
									  		<footer>
									  			<Button className="new-user-button options-table-admin">Aceptar</Button>
									  			<Button modal="close" className="new-user-button options-table-admin">Cancelar</Button>
								  			</footer>}
										  trigger={<Button className="new-user-button options-table-admin"><Icon>delete</Icon>borrar</Button>}>
										  <p>¿Estas seguro de que quieres elimiar al usuario <b>{row.login}</b>?</p>
										</Modal>

									</td>
								</tr>
							</td>
						</tr>)}
					</tbody>
				</table>
				<footer className="pagination">
					{ (this.state.lista.length > 1) ? <Pagination items={(this.state.lista.length / 6)} onSelect={(page) => this.changeList(page)} activePage={this.state.pagina} maxButtons={8} /> : "" }
				</footer>
			</div>
		);
	}
}

export default TableContainer;
import React, {Component} from 'react';
import {Button, Pagination, Modal, Icon} from 'react-materialize';
import './index.css';

class TableContainer extends Component {

	constructor(props){
		super(props);
		this.state = {
			lista: props.lista
		}
	}


	render() {
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
					{ this.state.lista.map((row,key) => 
						<tr key={key}>
							<td>{row.login}</td>
							<td>{row.name}</td>
							<td>{row.role_ids.map((role) => role.$oid)}</td>
							<td colSpan="3">
								<tr colSpan="3" className="tr-options-admin">
									<td><Button className="new-user-button options-table-admin"><Icon>edit</Icon>Editar</Button></td> 

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
					{ (this.state.lista.length > 1) ? <Pagination items={5} activePage={2} maxButtons={8} /> : "" }
				</footer>
			</div>
		);
	}
}

export default TableContainer;
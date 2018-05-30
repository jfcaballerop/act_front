import React from 'react';
import { Table, Icon, Modal, Button } from 'react-materialize'
import { Link } from 'react-router-dom'


class Info extends React.Component {

	constructor(props) {
		console.log('constructor', props)
		super(props);
		this.state = {
			lista2: props.items
		}
	}
	componentDidMount() {
		console.log('componentDidmount ', this.state)
	}


	render() {
		console.log('modal', this.state.lista2)

		return (
			<Table>
				<thead>
					<tr>
						<th data-field="id">#</th>
						<th data-field="code">Codigo</th>
						<th data-field="desc">Descripcion</th>
						<th data-field="acciones">Acciones</th>
					</tr>
				</thead>

				<tbody>
					{
						this.state.lista2.map((item, index) => {
							return (
								<tr key={index}>
									<td >{index}</td>
									<td >{item.code}</td>
									<td > {item.desc} </td>
									<td >
										<Link onClick={(e) => this.props.handler(item._id.$oid, 'edit', e)} to={"/actuaciones/cons_ord/edit/" + item._id.$oid} ><Icon>mode_edit</Icon></Link>
										<Modal
											header='¿Desea borrar el elemento?'
											// fixedFooter
											actions={
												<div>
													<Button flat modal="close" waves="light">Cancelar</Button>
													<Button onClick={(e) => this.props.handler(item._id.$oid, 'delete', e)} modal="close" waves="light" className="boton red" ><Icon left>delete</Icon>Borrar</Button>
												</div>
											}
											trigger={
												<Link to={"#"} ><Icon >delete</Icon></Link>
											}>
										</Modal>
										<Link onClick={(e) => this.props.handler(item._id.$oid, 'show', e)} to={"/actuaciones/cons_ord/show/" + item._id.$oid} ><Icon>insert_drive_file</Icon></Link>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</Table >);
	}
}

export default Info;
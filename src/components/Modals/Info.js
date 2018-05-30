import React from 'react';
import { Table, Icon, Modal, Button } from 'react-materialize'
import { NavLink, Link } from 'react-router-dom'


class Info extends React.Component {

	constructor(props) {
		// console.log('constructor', props)
		super(props);
		this.state = {
			lista2: props.items
		}
	}
	componentDidMount() {
		// console.log('componentDidmount ', this.state)
	}

	componentWillReceiveProps(props) {
		this.setState({ lista2: props.items })
	}

	render() {
		console.log('Modal', this.state.lista2)

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
										<Link className="link-edit" onClick={(e) => this.props.handler(item._id.$oid, 'edit', e)} to={"/actuaciones/cons_ord/edit/" + item._id.$oid} ><Icon left>mode_edit</Icon></Link>

										<Modal
											header={item.code}
											// fixedFooter
											actions={
												<div>
													<Button flat modal="close" waves="light">Cancelar</Button>
												</div>
											}
											trigger={
												<Link className="link-show" exact onClick={(e) => this.props.handler(item._id.$oid, 'show', e)} to={"/actuaciones/cons_ord/show/" + item._id.$oid} >
													<Icon left>insert_drive_file</Icon>
												</Link>
											}>
											<div class="row">
												code: {item.code}
											</div>
											<div class="row">
												baja: {item.baja}
											</div>
											<div class="row">
												clave_proy: {item.clave_proy}
											</div>
											<div class="row">
												desc: {item.desc}
											</div>
											<div class="row">
												fecha_fin_contrato: {item.fecha_fin_contrato}
											</div>
											<div class="row">
												fecha_ia: {item.fecha_ia}
											</div>
											<div class="row">
												fecha_ini_contrato: {item.fecha_ini_contrato}
											</div>
											<div class="row">
												imp_anual_adj: {item.imp_anual_adj}
											</div>
											<div class="row">
												imp_anual_lic: {item.imp_anual_lic}
											</div>
											<div class="row">
												n_contrato: {item.n_contrato}
											</div>
											<div class="row">
												n_pedido: {item.n_pedido}
											</div>
											<div class="row">
												num_ia: {item.num_ia}
											</div>


										</Modal>
										<Modal
											header='¿Desea borrar el elemento?'
											// fixedFooter
											actions={
												<div>
													<Button flat modal="close" waves="light">Cancelar</Button>
													<Button onClick={(e) => this.props.handler(item, 'delete', e)} modal="close" waves="light" className="boton red" ><Icon left>delete</Icon>Borrar</Button>
												</div>
											}
											trigger={
												<Link to={"#"} className="link-delete"><Icon left>delete</Icon></Link>
											}>
										</Modal>
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
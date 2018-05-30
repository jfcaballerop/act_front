import React from 'react';
import { Table } from 'react-materialize'
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
					</tr>
				</thead>

				<tbody>
					{
						this.state.lista2.map((item, index) => {
							return (
								<tr key={index}>
									<td >{index}</td>
									<td ><Link to={"/actuaciones/cons_ord/" + item._id.$oid} >{item.code}</Link> {item.code} </td>
									<td > {item.desc} </td>
								</tr>
							)
						})
					}
				</tbody>
			</Table >);
	}
}

export default Info;
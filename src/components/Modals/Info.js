import React from 'react';
import { Table } from 'react-materialize'


class Info extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			lista: this.props.items
		}
		console.log('constructor')
	}

	render() {
		console.log('modal', this.state.lista)

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
						this.props.items.map((item, index) => {
							return (
								<tr>
									<td key={index}>{index}</td>
									<td key={item.code}> {item.code} </td>
									<td key={item.desc}> {item.desc} </td>
								</tr>
							)
						})
					}
				</tbody>
			</Table >);
	}
}

export default Info;
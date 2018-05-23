import React, {Component} from 'react';
import './index.css';

class TableContainer extends Component {

	constructor(props){
		super(props)
		this.state = {
			elementos: props.lista
		}
	}

	render() {
		return (
			<table className="table-users-admin">
				<tbody>
					<tr>

						<th colSpan="2">Opciones</th>
						
					</tr>
					</tbody>
			</table>
			
		);
	}
}

export default TableContainer;
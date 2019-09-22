import React, {Component} from 'react';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: ''
		}
	}

	componentDidUpdate() {
			
	}


	render() {
		const {users} = this.props;
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{users.map(({age, name, points, rank}, i) => {
						return(
							<tr >
								<td>{age}</td>
								<td>{name}</td>
								<td>{points}</td>
								<td>{rank}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>)
	}
}

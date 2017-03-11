import React from 'react';

export default class CrudePetroleumTable extends React.Component {
    render () {
        return (
            <div className="col-md-12">
                <h2 className='defaultHeader'>Import Burden on Crude Petroleum</h2>
                <br />
                <table className="table table-condensed">
  					<thead>
  						<tr>
  							<th>Year</th>
  							<th>Rs(Crores)</th>
  							<th>Billion USD</th>
  						</tr>
  					</thead>
  					<tbody>
  						<tr>
  							<th scope='row'>2004-05</th>
  							<th>2005-06</th>
  							<th>2006-07</th>
  						</tr>
  						<tr>
  							<th scope='row'>1,01,963</th>
  							<th>1,50,557</th>
  							<th>1,90,000</th>
  						</tr>
  						<tr>
  							<th scope='row'>22.60</th>
  							<th>34.10</th>
  							<th>43.30</th>
  						</tr>
  					</tbody>
				</table>
            </div>
        );
    }
}

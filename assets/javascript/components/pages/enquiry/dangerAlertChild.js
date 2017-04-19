import React from 'react';

export default class DangerAlertChild extends React.Component{
	

	render() {
		return(
				<div className="alert alert-danger" role="alert">
					<span>!!! All Field are Compulsory !!!</span>
					<button type="button" className="close" aria-label="Close" onClick={this.props.handleCloseClick}><span className="pull-right" aria-hidden="true">&times;</span></button>
				</div>	
			);
	}
}
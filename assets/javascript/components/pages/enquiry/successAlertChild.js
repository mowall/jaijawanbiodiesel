import React from 'react';

export default class SuccessAlertChild extends React.Component{
	render() {
		return(
				<div className="alert alert-success" role="alert">
					<span>Message is successfully send ! Will respond on the mail you provided</span>
					<button type="button" className="close" aria-label="Close" onClick={this.props.handleCloseClick}><span className="pull-right" aria-hidden="true">&times;</span></button>
				</div>	
			);
	}
}
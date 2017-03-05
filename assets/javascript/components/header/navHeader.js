import React from 'react';

export default class NavHeader extends React.Component {
	render(){
		const logoImage = require('../../../images/logo3.png');

		return (
			<div className="navbar-header">
    			<div className="container">
    				<a className="navbar-brand" href={"#/"}><img src={logoImage} className="img-responsive logo-image" alt="Jai Jawan BioDiesel Logo"/></a>  				
    			</div>
    		</div>
		);
	}
}
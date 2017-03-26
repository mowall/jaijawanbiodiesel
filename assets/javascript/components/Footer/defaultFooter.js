import React from 'react';

export default class Footer extends React.Component {
	render() {
    const footerIcon = require('../../../images/footerIcon.png');
		return (
			<div className="footer">
      			<div className="container">
        			<div className="row">
                  <div className="col-md-4">
                    <ul className="list-unstyled">
                      <li><a href="#/companymission">Company Mission</a></li>
                      <li><a href="#/">Company Information</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4 imageCol">
                    <a href={"#/"}><img src={footerIcon} className="img-responsive" alt="logo Image"/></a>
                  </div>
                  <div className="col-md-4">
                    <ul className="list-unstyled">
                      <li><a href="#/faq">FAQ'S</a></li>
                      <li><a href="#/contact">Contact</a></li>
                    </ul>
                  </div>
              </div>
      			</div>
   			</div>
			);
	}
}

import React from 'react';

export default class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
      			<div className="container">
        			<div className="row">
          				<div className="col-md-6">
          					<div className="footbarWrapper">
      							<ul className="footbar-left">
        							<li><a className="active" href="#">Home</a></li>
        							<li><a href="#">Serives</a></li>
        							<li><a href="#">About</a></li>
        							<li><a href="#">Blogs</a></li>
        							<li><a href="#">Contacts</a></li>
        							<li className="clear" ></li>
      							</ul>
      						</div>
      					</div>
      					<div className="col-md-6">
							<div className="footbarWrapper">
      							<ul className="footbar-right">
        							<li><a href="#">Site map</a></li>
        							<li><a href="#">Code of business conduct & ethics</a></li>
        							<li><a href="#">privacy</a></li>
        							<li><a href="#">Terms of use</a></li>
        							<li className="clear" ></li>
      							</ul>
          					</div>
          				</div>
                  	</div>
        			<div className="copyrightSymbol"><p>MicroSave &copy 2012</p></div>
      			</div>
   			</div>
			);
	}
}

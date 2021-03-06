import React from 'react';

export default class Contact extends React.Component {
    render () {
      const contactImage = require('../../../images/contactImage.png'); 
        return (
            <div className="col-md-9 contentScreen">
               <div className="row">
               		<div className="col-md-12">
                    <br />
               			<img src={contactImage} className="img-responsive introImage" alt="Contact Image"/>
               			<dl className="defaultDescList">
               				<dt>Registered Office & Mailing Address:</dt>
               				<dd>
               					ARTARA ROAD MAUDAHA HAMIRPUR (U.P) <br />
               					BRANCH OFFICE: BHARUA SUMERPUR (U.P)
               				</dd>
               				<br />
               				<dt>MANAGING  DIRECTOR:</dt>
               				<dd>
               					RISHABH GUPTA(LUCKY)<br />
               					EMAIL: guptalucky49613@gmail.com <br />
               					MOB NO: +917380423292
               				</dd>
               				<br />
               				<dt>CHAIRMAN:</dt>
               				<dd>
               					SANTOSH KUMAR GUPTA <br />
               					 EMAIL: guptasantoshkumar280@gmail.com
               				</dd>
               			</dl>
                    <br />
               		</div>
               </div>
            </div>
        );
    }
}

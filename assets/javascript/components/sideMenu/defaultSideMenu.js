import React from 'react';
import Enquiry from '../pages/enquiry';

export default class DefaultSideMenu extends React.Component {
    render () {
        return (
            <div className="col-md-3">
            	<div className="list-group defaultSideMenu">
      					<a href="#/biodieselhistory" className="list-group-item">Historical Background</a>
      					<a href="#/production" className="list-group-item">Production</a>
      					<a href="#/biodieselpolicies" className="list-group-item">BioDiesel Policies</a>
                <a href="#/companyinformation" className="list-group-item">Company Information</a>
    				    <a href="#"className="list-group-item btn btn-default" role="button"data-toggle="modal" data-target="#myModal">
                  Enquiry
                </a>
              </div>
              <Enquiry />
            </div>    
        );
    }
}

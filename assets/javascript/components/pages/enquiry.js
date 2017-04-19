import React from 'react';
import DangerAlertChild from './enquiry/dangerAlertChild';
import SuccessAlertChild from './enquiry/successAlertChild';

export default class Enquiry extends React.Component {
	constructor(props){
		super(props);

		this.state={
			nameValueAttr : '',
			senderEmailValueAttr : '',
			messageValueAttr : '',
			dangerAlertChildVisible : false,
			successAlertChildVisible : false
		}

		this.handleClearClick = this.handleClearClick.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSenderEmailChange = this.handleSenderEmailChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleSendMessageClick = this.handleSendMessageClick.bind(this);
		this.handleResetClick = this.handleResetClick.bind(this);
		this.handleCloseClick = this.handleResetClick.bind(this);
		this.makeDangerAlertChildVisibleFalse = this.makeDangerAlertChildVisibleFalse.bind(this);
		this.makeSuccessAlertChildVisibleFalse = this.makeSuccessAlertChildVisibleFalse.bind(this);
	}

	handleNameChange = (e) => {
		this.setState({nameValueAttr: e.target.value});
	}

	handleSenderEmailChange = (e) => {
		this.setState({senderEmailValueAttr : e.target.value});
	}

	handleMessageChange = (e) => {
		this.setState({messageValueAttr: e.target.value});
	}

	makeDangerAlertChildVisibleFalse(){
		this.setState({dangerAlertChildVisible : false});
	}

	makeSuccessAlertChildVisibleFalse(){
		this.setState({successAlertChildVisible : false});
	}

	handleClearClick(){
		this.setState({nameValueAttr : ''});
		this.setState({senderEmailValueAttr : ''});
		this.setState({messageValueAttr : ''});
	}

	handleSendMessageClick(){
		const nameValueAttr = this.state.nameValueAttr;
		const senderEmailValueAttr = this.state.senderEmailValueAttr;
		const messageValueAttr = this.state.messageValueAttr;
		if(nameValueAttr == '' || senderEmailValueAttr == '' || messageValueAttr == '') {
				this.setState({dangerAlertChildVisible : true});
				this.setState({successAlertChildVisible : false});
		} else {
			this.setState({dangerAlertChildVisible : false});
			this.setState({successAlertChildVisible : true});
			this.handleClearClick();
		}
	}

	handleResetClick(){
		this.setState({dangerAlertChildVisible : false});
		this.setState({successAlertChildVisible : false});
		this.handleClearClick();
	}

	handleCloseClick(){
		this.setState({dangerAlertChildVisible : false});
		this.setState({successAlertChildVisible : false});
		this.handleClearClick();
	}

    render () {
        return (
				<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleCloseClick}><span aria-hidden="true">&times;</span></button>
				        <h4 className="modal-title" id="modalLabel">Send Your Query To Us</h4>
				      </div>
				      <div className="modal-body">
				      	{
				    		this.state.dangerAlertChildVisible ? <DangerAlertChild handleCloseClick={this.makeDangerAlertChildVisibleFalse} /> : null	
				    	}
				    	{
				    		this.state.successAlertChildVisible ? <SuccessAlertChild handleCloseClick={this.makeSuccessAlertChildVisibleFalse} /> : null
				    	}
				        <form>
				          <div className="form-group">
				            <label for="sender-name" className="control-label">Name:</label>
				            <input ref="clearForm" type="text" className="form-control" id="sender-name" value={this.state.nameValueAttr} onChange={this.handleNameChange}/>
				          </div>
				          <div className="form-group">
				            <label for="senderEmail-name" className="control-label">Email:</label>
				            <input  type="text" className="form-control" id="sender-name" value={this.state.senderEmailValueAttr} onChange={this.handleSenderEmailChange}/>
				          </div>
				          <div className="form-group">
				            <label for="message-text" className="control-label">Message:</label>
				            <textarea  className="form-control" id="message-text" value={this.state.messageValueAttr} onChange={this.handleMessageChange}></textarea>
				          </div>
				        </form>
				      </div>
				      <div className="modal-footer">
				      	<button type="button" className="btn btn-danger pull-left" onClick={this.handleResetClick}>Reset</button>
				        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.handleCloseClick}>Close</button>
				        <button type="button" className="btn btn-success" onClick={this.handleSendMessageClick}>Send message</button>
				      </div>
				    </div>
				  </div>
				</div>
        	);
    }
}


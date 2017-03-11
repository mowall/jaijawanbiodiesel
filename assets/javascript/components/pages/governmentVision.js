import React from 'react';
import Introduction from './governmentVision/introduction';
import CentralPollutionControlBoard from './governmentVision/centralPollutionControlBoard';

export default class GovernmentVision extends React.Component {
    render () {
        return (
            <div className="col-md-9">
                <div className="row">
                    <Introduction />
                    <CentralPollutionControlBoard />
                </div>
            </div>
        );
    }
}

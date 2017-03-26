import React from 'react';
import Report from './reportOnBiodiesel';
import Manufacturers from './manufacturers';
import PrivateProducers from './privateProducers';
import PrivateManufacturers from './privateManufacturers';
export default class CentralPollutionControlBoard extends React.Component {
    render () {
        return (
            <div className="col-md-12">
               <h2 className="defaultHeader">Central Pollution Control Board on BioDiesel
               </h2>
               <Report />
               <Manufacturers />
               <PrivateProducers />
               <PrivateManufacturers />
            </div>
        );
    }
}

import React from 'react';
import Introduction from './deskOfMD/introduction';
import WorldScenario from './deskOfMD/worldScenario';
import IndianScenario from './deskOfMD/indianScenario';
import CrudePetroleumTable from './deskOfMD/crudePetroleumTable';
import IndianEconomy from './deskOfMD/indianEconomy';

export default class DeskOfMD extends React.Component {
    render () {
        return (
            <div className="col-md-9 contentScreen">
               <div className="row">
                    <Introduction />
                    <WorldScenario />
                    <IndianScenario />
                    <CrudePetroleumTable />
                    <IndianEconomy />
                </div>
            </div>
        );
    }
}

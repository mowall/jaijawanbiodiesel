import React from 'react';
import Introduction from './production/introduction';
import ProductionLevel from './production/productionLevel';
import FactoryLayoutSlideShow from './production/factoryLayoutSlideShow';

export default class Production extends React.Component {
    render () {
        return (
            <div className="col-md-9 contentScreen">
            	<div className='row'>
               		<Introduction />
                  <FactoryLayoutSlideShow />
               		<ProductionLevel />
               	</div>
            </div>
        );
    }
}

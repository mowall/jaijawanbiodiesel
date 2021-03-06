import React from 'react';

export default class CompanyMission extends React.Component {
    render () {
        const companyMissionImage = require('../../../images/companymission.png');
        return (
            <div className="col-md-9 contentScreen">
            	<div className="row">
            		<div className="col-md-12">
                        <br />
                        <img src={companyMissionImage} className="img-responsive introImage" alt="Company Mission Image"/>
                        <br />
                        <p>
            				<b>
            					Our sky is murky, Sheath of polluted emissions over our environment, Atmospheric Pollution, Global Warming, Health Hazards, Scarcity of Fuels accompanied with ever escalating price has become a major concern for the Global Community and Mankind today.
            				</b>
            			</p>
            			<br />
            			<p>
            				<b>
            					Endurance has become convoluted and there seems no way apart from going the GREEN WAY.
            				</b>
            			</p>
            			<br />
            			<p>
            				<b>
								To combat the above, World is shifting quick to Green Energy-Biodiesel, Bio-Ethanol, Wind Energy and Solar Energy etc.We want to embark on making India an Energy Sufficient Country according to our National Mission. Working together we can make our country self sufficient in Green Energy rather than relying on imported Mineral Fuels which loads our atmosphere with colossal amount of toxic emissions.            				
            				</b>
            			</p>
            		</div>
            	</div>
            </div>
        );
    }
}

import React from 'react';

export default class Introduction extends React.Component {
    render () {
        const h2Style={
            borderBottom: "none"
        };
    	const mdvisionImage = require('../../../../images/mdvision.jpg');
        return (
            <div className="col-md-12">
            	<h2 className='defaultHeader'style={h2Style}>From The Dest Of M.D.</h2>
                <img src={mdvisionImage} className="img-responsive introImage" alt="M.D. Vision Image"/>
            	<p>
            	Biodiesel is a wonder of the wonders of this era - A Fuel Oil replacement for Mineral Diesel Fuel (HSD/LDO/FO) with far superior characteristics. To name a few are:
            	</p>
            	<ul className="defaultList">
            		<li>Far superior to Mineral Diesel</li>
            		<li>Environmental friendly</li>
            		<li>Safe</li>
            		<li>Renewable</li>
            		<li>Can be home brewed</li>
            	</ul>
            	<p>
            	Biodiesel can be produced from any vegetable oil, Animal Tallow, Waste Cooking Oil, Fish Oil and the like which occurs naturally across the globe.
            	</p>
            	<br />
            	<p>
				While considering Biodiesel, mankind is not restricted to the occurrence of the oil deposits as compared to that of mineral diesel. The raw materials used for production of biodiesel can be grown ubiquitously where there are footprints of mankind.
				</p>
				<br />
				<p>
				The concept of Biodiesel therefore, liberates the mankind of the regional bounds of oil wells and offers self-sufficiency for every region of the world.
				Biodiesel is gaining popularity world over.
            	</p>
            </div>
        );
    }
}

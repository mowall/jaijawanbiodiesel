import React from 'react';

export default class PrivateProducers extends React.Component {
    render () {
    	const petrolPumpImage = require('../../../../images/petrolpump.jpg');

        return (
            <div >
            	<h3 className='defaultHeader2'>Govt allows direct sale of Bio-Diesel by all Private Producers</h3>
                <img src={petrolPumpImage} className="img-responsive" alt="Petrol Pump"/>
                <br />
                <p>
                In a bid to augment supply of environment friendly fuel, the government today allowed private manufacturers of bio-diesel to sell it directly to consumers like Indian Railways.
				Till now, only state-owned oil firms and only those private firms investing Rs 2,000 crore in oil infrastructure were allowed to retail petrol and diesel. Bio-diesel, which is to be doped in diesel before being used to fire automobiles, too was clubbed under this rule.
                </p>
                <br />
                <p>
                "The Union Cabinet chaired by Prime Minister Narendra Modi today gave its approval for amending the Motor Spirit (petrol) and High Speed Diesel (diesel) control order for Regulation of Supply, Distribution and Prevention of Malpractices dated December 19, 2005," said an official statement here.
                </p>
                <br />
                <p>
                "The amendment will allow private bio-diesel manufacturers, their authorised dealers and joint ventures of oil marketing companies (OMCs) authorised by the Ministry of Petroleum & Natural Gas (MoP&NG) as dealers and give marketing /distribution functions to them for the limited purpose of supply of bio-diesel to consumers," it said.
                </p>
                <br />
                <p>
                Also, the Rs 2,000 crore investment "will also be relaxed and a new clause added to give marketing rights for bio-diesel to the private bio-diesel manufacturers, their authorised dealers and JVs of OMCs authorised by the MoP&NG for direct sales to consumers", it said.
				The amendment was made because users faced problems in sourcing bio-diesel. State-owned firms had their financial consideration because cost of bio-diesel was more than the refinery-gate price of diesel.
                </p>
                <br />
                <p>
                With the relaxation, bulk users like Railways can buy bio-diesel directly from manufacturers and dope in diesel for running locomotives.
				"This decision will encourage the production and use of bio-diesel in the country," the statement said.
				The ministry had in January 2006 announced a Bio-diesel Purchase Policy to encourage production of bio-diesel in the country for blending it with diesel with the objective of increasing energy security and meeting other emission and environment objectives.
                </p>
                <br />
                <p>
                Under this Policy, OMCs were to buy Bio-diesel, meeting fuel quality standard prescribed by the Bureau of Indian Standards (BIS), at a uniform price, as decided by the OMCs from time to time, for blending with HSD to the extent of five percent, at identified purchase centres across the country.
				"As the price of diesel is already deregulated and determined by the market, there is no economic justification in preventing private bio-diesel manufacturers, their authorised dealers and JVs of OMCs authorised by the MoP&NG from selling bio-diesel directly to consumers subject to their product meeting prescribed BIS standards," said the statement.
                </p>
            </div>
        );
    }
}

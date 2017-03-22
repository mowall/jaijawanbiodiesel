import React from 'react';

export default class SWOTAnalysis extends React.Component {
    render () {
    	const biodieselImage = require('../../../../images/biodieselImage.jpg');
    	const h2Style={
    		borderBottom: "none"
    	};
    	
        return (
            <div className="col-md-9">
            	<div className="row">
            		<div className="col-md-12">
            			<h2 className='defaultHeader' style={h2Style} >SWOT Analysis</h2>
                		<img src={biodieselImage} className="img-responsive" alt="BiodDiesel Image"/>
                		<h3 className='defaultHeader'>Transesterification Process</h3>
                		<dl className="defaultDescList">
                			<dt>STRENGTHS</dt>
                			<dd>
                				<ol className="defaultList">
                					<li>
                						Quite simple chemistry.
                					</li>
                					<li>
                						Small volume bio-diesel machines are commercially available.
                					</li>
                				</ol>
                			</dd>
                			<dt>WEAKNESSES</dt>
                			<dd>
                				<ol className="defaultList">
                					<li>
                						Relatively high labour input.
                					</li>
                					<li>
                						Higher capital investment.
                					</li>
                					<li>
                						Methanol involved in process (toxic & derived from fossil fuel).
                					</li>
                					<li>
                						Glycerol is a by-product.
                					</li>
                					<li>
                						Relatively high direct energy input/costs.
                					</li>
                				</ol>
                			</dd>
                			<dt>OPPORTUNITIES</dt>
                			<dd>
                				<ol className="defaultList">
                					<li>
                						Re-use glycerol (e.g. for heat process).
                					</li>
                					<li>
                						Methanol recovery (e.g. using waste heat).
                					</li>
                					<li>
                						Potential to develop process using bio-ethanol (rather than methanol).
                					</li>
                					<li>
                						Funding is currently available for bio-fuel production and research.
                					</li>
                					<li>
                						Strengthening bio-fuel network.
                					</li>
                				</ol>
                			</dd>
                			<dt>THREATS</dt>
                			<dd>
                				<ol className="defaultList">
                					<li>
                						Potential for increase in cost of methanol.
                					</li>
                					<li>
                						Potential for increase in cost of sodium hydroxide (catalyst).
                					</li>
                					<li>
                						Large companies introducing 5% blend.
                					</li>
                				</ol>
                			</dd>
                		</dl>
            		</div>
            		<br />
            		<div className="col-md-12">
            			<h3 className='defaultHeader'>Opportunity of Biodiesel</h3>
            			<ol className="defaultList">
            				<li>
            					Ever increasing Crude oil price.
            				</li>
            				<li>
            					Employment generation capacity in rural areas.
            				</li>
            				<li>
            					Better Utilization of fallow cultivable waste land.
            				</li>
            				<li>
            					Low gestation period comparative to other non-edible oil sources.
            				</li>
            				<li>
            					Having carbon credit value (Kyoto protocol).
            				</li>
            				<li>
            					Required in large quantity to sustain huge demand.
            				</li>
            				<li>
            					With use of Biotechnology encouraging primary result.
            				</li>
            			</ol>
            		</div>
            		<br />
            		<div className="col-md-12">
            			<h3 className='defaultHeader'>Threats towards Biodiesel</h3>
                		<ol className="defaultList">
                			<li>
                				Over publicity.
                			</li>
                			<li>
                				Abundance of misleading information.
                			</li>
                			<li>
                				Mall practice in input materials.
                			</li>
                			<li>
                				Costly input materials.
                			</li>
                			<li>
                				Low (no) support price for seed.
                			</li>
                			<li>
                				No sustainable Procurement Mechanism available in the Market.
                			</li>
                			<li>
                				Requirement of seed in large quantity even to fulfill demand of 5% blending with diesel.
                			</li>
                			<li>
                				Government strategies to wards Bio diesel project are not implemented properly.
                			</li>
                		</ol>
            		</div>
            	</div>
            </div>
        );
    }
}

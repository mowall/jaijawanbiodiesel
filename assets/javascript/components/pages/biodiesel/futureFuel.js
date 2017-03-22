import React from 'react';

export default class FutureFuel extends React.Component {
    render () {
        const biodieselImage = require('../../../../images/biodieselImage.jpg');
        const h2Style={
            borderBottom: "none"
        };

        return (
            <div className="col-md-9">
                <div className="row">
                	<div className="col-md-12">
                		<h2 className='defaultHeader' style={h2Style}>BiodDiesel - A Fuel Of Future</h2>
                		<img src={biodieselImage} className="img-responsive" alt="BiodDiesel Image"/>
                		<br />
                		<p>
                			Biodiesel is a safe alternative fuel to replace traditional petroleum diesel. It has high-lubricity, is a clean-burning fuel and can be a fuel component for use in existing, unmodified diesel engines. This means that no retrofits are necessary when using biodiesel fuel in any diesel powered combustion engine. It is the only alternative fuel that offers such convenience. Biodiesel acts like petroleum diesel, but produces less air pollution, comes from renewable sources, is biodegradable and is safer for the environment. Producing biodiesel fuels can help create local economic revitalization and local environmental benefits. Many groups interested in promoting the use of biodiesel already exist at the local, state and national level.
                		</p>
                		<br />
                		<p>
                			Biodiesel is designed for complete compatibility with petroleum diesel and can be blended in any ratio, from additive levels to 100 percent biodiesel. In the United States today, biodiesel is typically produced from soybean or rapeseed oil or can be reprocessed from waste cooking oils or animal fats such as waste fish oil. Because it is made of these easily obtainable plant-based materials, it is a completely renewable fuel source.
                		</p>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className="defaultHeader">Benefits Of BioDiesel</h2>
                		<p>
                			Biodiesel can be considered a new technology, taking into account all the years consumers have had to settle for traditional diesel.
                		</p>
                		<ul className="defaultList">
                			<li>
                				Biodiesel is not harmful to the environment. A vehicle tends to pollute the environment and emits harmful gasses, if injected with HSD whereas if the engine is using biodiesel it emits no harmful gasses rather keeps the environment pollution free.
                			</li>
                			<li>
                				Biodiesel may not require an engine modification. Biodiesel can be blended with diesel so as to improve the efficiency of the engine without any hassles.
                			</li>
                			<li>
                				Biodiesel is cheap. You can even make biodiesel in your backyard. If your engine can work with biodiesel fuel alone, then you really need not go to the gas station to buy fuel. You can just manufacture some for your own personal use.
                			</li>
                			<li>
                				Any Vehicle using Biodiesel has very low idle stating noise. It is noted that biodiesel has a Cetane number of over 100. Cetane number is used to measure the quality of the fuel’s ignition. If your fuel has a high Cetane number, you can be sure that what you get is a very easy cold starting coupled with a low idle noise.
                			</li>
                			<li>
                				Biodiesel is cost effective because it is produced locally.
                			</li>
                		</ul>
                		<p>
  			              	Biodiesel as a fuel not only helps reducing the pollution, reduces health hazards and gives our society <b>A CLEANER AND GREENER TOMORROW</b>.
                		</p>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className="defaultHeader">Advantages Of Using BioDiesel</h2>
                		<ul className="defaultList">
                			<li>
                				<h4>Easy to use</h4>
                				<p>
									Biodiesel can be used in existing engines, vehicles and infrastructure with practically no changes. Biodiesel can be pumped, stored and burned just like petroleum diesel fuel, and can be used pure, or in blends with petroleum diesel fuel in any proportion. Power and fuel economy using biodiesel is practically identical to petroleum diesel fuel, and year round operation can be achieved by blending with diesel fuel.
                				</p>
                			</li>
                			<li>
                				<h4>Power & Performance</h4>
                				<p>
                					The degree to which fuel provides proper lubrication is its lubricity. Low lubricity petroleum diesel fuel can cause premature failure of injection system components and decreased performance. Biodiesel provides excellent lubricity to the fuel injection system.
                				</p>
                			</li>
                			<li>
                				<h4>Emissions & Greenhouse Gas Reduction</h4>
                				<p>
                					Biodiesel provides significantly reduced emissions of carbon monoxide, particulate matter, unburned hydrocarbons, and sulfates compared to petroleum diesel fuel. Additionally, biodiesel reduces emissions of carcinogenic compounds by as much as 85% compared with petrodiesel. When blended with petroleum diesel fuel, these emissions reductions are generally directly proportional to the amount of biodiesel in the blend.
                				</p>
                			</li>
                		</ul>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className="defaultHeader">Greenhouse Gases</h2>
                		<p>
                			Carbon dioxide produced from biodiesel combustion does not contribute to new emissions of CO2 as it is part of the carbon cycle. Closed carbon cycle - 80% reduction in CO2. Example: growing oil feedstock consumes four to six times more CO2 than biodiesel exhaust.
                		</p>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className="defaultHeader">Smog-Forming Pollutants (Ozone precursors)</h2>
                		<p>
                			Compared to diesel, biodiesel effects on engine exhaust are in the table that follows: B100 refers to neat biodiesel; B20 refers to 20% biodiesel blended with 2 Diesel:
                		</p>
                		<br />
                		<table className="table table-bordered">
		  					<tbody>
		  						<tr>
		  							<th scope='row'>HC</th>
		  							<th>36.73% reduction with B100 (2)</th>
		  							<th>7.35% reduction with B20</th>
		  						</tr>
		  						<tr>
		  							<th scope='row'>CO</th>
		  							<th>46.23% reduction with B100</th>
		  							<th>9.25% reduction with B20</th>
		  						</tr>
		  						<tr>
		  							<th scope='row'>PM</th>
		  							<th>68.07% reduction with B100</th>
		  							<th>13.61% reduction with B20</th>
		  						</tr>
		  						<tr>
		  							<th scope='row'>SOx(3)</th>
		  							<th>100% reduction with B100</th>
		  							<th>20% reduction with B20</th>
		  						</tr>
		  					</tbody>
						</table>
						<br />
						<p>
							The above data on HC, CO, PM, and SOx is based on data reported by Dr. Groboski in 1998 paper "Combustion of Fat and Vegetable Oil Derived Fuels in Diesel Engines."OAE-BIO3 formulation with low-NOx additive will bring NOx to diesel baseline. Data on effect of biodiesel on NOx is scattered. OAE testing of in-use diesel engines showed NOx reductions of 10-18% compared to diesel baseline. Biodiesel use in in-use diesel engines results in cleaning of injectors which restores the original spray patter (also improves fuel economy), resulting in lowering of NOx. Testing of heavy-duty laboratory engines by research scientist has not shown the reduction levels achieved with the in-use engines. If low- NOx is desired, OAE also offers several other proprietary engine technologies to reduce NOx by 30-40%. Contact OAE representative for low- NOx options. The above data is with laboratory engines (also called golden engines). In use engines tested by OAE showed NOx reductions of 18% with the use of biodiesel due primarily to the fact that biodiesel cleaned injectors and lines resulting in better spray pattern.
						</p>
						<ul className="defaultList">
							<li>
								Ozone forming potential of biodiesel HC is 50% less for B100, 10% less for B20.
							</li>
							<li>
								Calculated by OAE due to no sulphur in biodiesel.
							</li>
						</ul>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className="defaultHeader">Toxic Emissions</h2>
                		<table className="table table-bordered">
		  					<tbody>
		  						<tr>
		  							<th scope='row'>Polycyclic Aromatic Hydrocarbons (PAH) reduction w/B20</th>
		  							<th>80% reduction w/B100</th>
		  							<th>13%</th>
		  						</tr>
		  						<tr>
		  							<th scope='row'>NPAH (nitrated PAH) reduction w/B</th>
		  							<th>90% reduction w/B100</th>
		  							<th>50%</th>
		  						</tr>
		  					</tbody>
						</table>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className="defaultHeader">Grown, Produced and Distributed Locally</h2>
                		<p>
                			Worldwide, energy security is becoming a hot topic in government and society. Nearly every country in the world depends on imports of various forms of fossil fuel energy, including oil, coal and natural gas. Without a steady supply of affordable energy a country’s economy grinds to a halt, with no fuel for transportation, energy to run power plants and factories, or heat homes. Biodiesel can improve energy security wherever it is produced in several ways:
                		</p>
                		<dl className="defaultDescList">
                			<dt>Domestic Energy Crops</dt>
                			<dd>
                				The dependence on foreign oil supplies is reduced to a large extent because of the presence of feedstock and other sources that are used to produce biodiesel.
                			</dd>
                			<dt>Increased Refining Capacity</dt>
                			<dd>
                				Today biodiesel is produced in refineries which are locally made, reducing the dependence on other countries for importing finished expensive products.
                			</dd>
                		</dl>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className="defaultHeader">Toxicity, Biodegradability, Safety & Recycling</h2>
                		<p>
                			Occasional spills of the fuel do occur in and around the establishment of the Processing Plant. The impact of it on plants, animals and human beings should be considered. Biodiesel is less toxic than diesel and is biodegradable. All these attributes make biodiesel less harmful to the environment.
                		</p>
                		<dl className="defaultDescList">
                			<dt>Non-Toxic</dt>
                			<dd>
                				Biodiesel is considered to be less toxic as it originates from vegetable oil.
                			</dd>
                			<dt>Biodegradability</dt>
                			<dd>
                				In both soil and water, biodiesel degraded at a rate 4 times faster than regular diesel fuel, with nearly 80% of the carbon in the fuel being readily converted by soil.
                			</dd>                			
                		</dl>
                		<br />
                		<span><b>* Peterson, Charles and Moller, Gregory. "Biodegradability, BOD4, COD and Toxicity of Biodiesel Fuels", University of Idaho Biodiesel Education Program.</b></span>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className="defaultHeader">Safe and Stable Fuel</h2>
                		<p>
                			Due to the existence of low volatility nature of biodiesel, it is easier and safe to handle than petroleum. The danger of accidental ignition increases when the fuel is being stored, transported, or transferred because of high energy content in all liquid fuels. The possibility of having an accidental ignition is related to the temperature at which the fuel will create enough vapors to ignite, known as the flash point temperature. The lower the flash point of a fuel is, the lower the temperature at which the fuel can form a combustible mixture. Biodiesel has a flash point of over 2660 F, meaning it cannot form a combustible mixture until it is heated well above the boiling point of water.
                		</p>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className="defaultHeader">Economic Development</h2>
  						<p>
  						The resources that are used to produce Biodiesel are locally available. The in-house production of Biodiesel provides host of economic benefits for the local communities.
  						</p>
  						<ul className="defaultList">
  							<li>
  								Creation of more employment, Jobs created for feedstock farming and/or collection.
  							</li>
  							<li>
  								Skilled jobs created for biodiesel production and distribution.(Engineers,Technicians etc.)
  							</li>
  							<li>
  								Tax Benefits.
  							</li>
  							<li>
  								Generation of Income for the local feedstock producers and refiners.
  							</li>
  						</ul>
  	              	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className="defaultHeader">Viability of Biodiesel Production</h2>
                		<p>
                			Biodiesel Processing Plant Operators who have a Multi Feedstock Plant function with a competitive edge over others because of the fact that their plant can run on variety of feedstock easily available in the local market. Multi Feedstock Plant operators are less sensitive to Price Fluctuations because they can choose from a range of easily available feedstock that are used to produce Biodiesel.
                		</p>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className="defaultHeader">WIN-WIN Situation</h2>
                		<p>
                			A win-win situation is one in which all the participants can profit from it in one way or the other. For instance here the Biodiesel Producer and the Farmers can both earn profit and continue to operate in a successful market with the flexibility of feedstock. Hence it leads to A WIN WIN SITUATION for all the participants in the industry.
                		</p>
                	</div>
                </div>
            </div>
        );
    }
}

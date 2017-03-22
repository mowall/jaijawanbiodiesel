import React from 'react';

export default class FactsAndFigures extends React.Component {
    render () {
    	const biodieselImage = require('../../../../images/biodieselImage.jpg');
        const avaiableOilResourcesImage = require('../../../../images/avaiableOilResourcesImage.jpg'); 
    	const biodieselLubricityImage = require('../../../../images/biodieselLubricityImage.jpg'); 
        const h2Style={
    		borderBottom: "none"
    	};
        return (
            <div className="col-md-9">
            	<div className="row">
            		<div className="col-md-12">
            			<h2 className='defaultHeader' style={h2Style}>Facts & Figures Of BiodDiesel</h2>
                		<img src={biodieselImage} className="img-responsive" alt="BiodDiesel Image"/>
            			<br />
            			<p>
            				Fundamentals that lead to Biofuels:
            			</p>
            			<ul className="defaultList">
            				<li>
            					Resources of Petroleum and Natural Gas Limited: North Sea region: Oil 10 years (current production) natural gas 20-25 years.
            				</li>
            				<li>
								Unfavorable Geographical Distribution: Petroleum 78% in OPEC areas, mainly Near East. Natural gas 32% Russia + 39% OPEC.            				
            				</li>
            				<li>
								Depletion Mid-Point reached soon.            				
            				</li>
            				<li>
            					Worldwide transportation needs Liquid Energy.
            				</li>
            				<li>
            					Gulf crisis August 2, 1990, triggered biodiesel worldwide.
            				</li>
            				<li>
            					CO2 abatement minus 15 tons CO2 per hectare.
            				</li>
            			</ul>
            		</div>
                    <br />
                    <div className="col-md-12">
                        <h3 className='defaultHeader'>Available Oil Resources</h3>
                        <img src={avaiableOilResourcesImage} className="img-responsive" alt="Available Oil Resources"/>
                    </div>
                    <br />
                    <div className="col-md-12">
                        <h3 className='defaultHeader'>Biodiesel/ Diesel Lubricity</h3>
                        <img src={biodieselLubricityImage} className="img-responsive" alt="Biodiesel Lubricity"/>
                    </div>
                    <br />
                    <div className="col-md-12">
                        <h3 className='defaultHeader'>Biodiesel in comparison with High Speed Diesel (HSD)</h3>
                        <dl className="defaultDescList">
                            <dt>BIO DIESEL</dt>
                            <dd>
                                Biodiesel is renewable fuels.It can be used without changes in existing engine. Biodiesel reduces the exhaust emission thus helps in reducing pollution.Biodiesel increases rural income; provide employment and leads towards economic growth of India.
                            </dd>
                            <dt>BENEFITS OF BIODIESEL</dt>
                            <dd>
                                <ul className="defaultList">
                                    <li>Biodiesel reduces 100% CO2 emission.</li>
                                    <li>Biodiesel reduces smoke due to soot free and complete combustion.</li>
                                    <li>Biodiesel reduces hydrocarbon emission.</li>
                                    <li>Biodiesel reduces carbon monoxide emission.</li>
                                    <li>Biodiesel is safe for transport due to high flash point.</li>
                                    <li>Biodiesel is safe for handle as it is bio-degradable and non-toxic.</li>
                                    <li>Biodiesel is renewable energy sources.</li>
                                    <li>Biodiesel promotes rural development.</li>
                                </ul>
                            </dd>
                        </dl>
                        <p>The comparative study report for the HSD, Biodiesel (PME) and Furnace Oil</p>
                        <br />
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Parameter</th>
                                    <th>HSD Petro Diesel</th>
                                    <th>PME Biodiesel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>01</th>
                                    <th>Cetane No</th>
                                    <th>45</th>
                                    <th>58 - 62</th>
                                </tr>
                                <tr>
                                    <th scope='row'>02</th>
                                    <th>Carbon Residue % mass</th>
                                    <th>0.35</th>
                                    <th>{'<'}0.05</th>
                                </tr>
                                <tr>
                                    <th scope='row'>03</th>
                                    <th>Flash Point 0C  60</th>
                                    <th>60</th>
                                    <th>{'>'}145</th>
                                </tr>
                                <tr>
                                    <th scope='row'>04</th>
                                    <th>Sulphur Content% mass</th>
                                    <th>0.25</th>
                                    <th>{'<'}0.0002</th>
                                </tr>
                                <tr>
                                    <th scope='row'>05</th>
                                    <th>Viscosity@400C cSt</th>
                                    <th>1.8 - 5.0</th>
                                    <th>4.5 - 4.8</th>
                                </tr>
                                <tr>
                                    <th scope='row'>06</th>
                                    <th>Calorific Value Kcal/kg</th>
                                    <th>10700</th>
                                    <th>9600</th>
                                </tr>
                                <tr>
                                    <th scope='row'>07</th>
                                    <th>Density@150C kg/m3</th>
                                    <th>883.0</th>
                                    <th>874.0</th>
                                </tr>
                                <tr>
                                    <th scope='row'>08</th>
                                    <th>Boiling Point 0C</th>
                                    <th>215 - 376</th>
                                    <th>{'>'}290</th>
                                </tr>
                                <tr>
                                    <th scope='row'>09</th>
                                    <th>Melting Point 0C</th>
                                    <th>N.A.</th>
                                    <th>12</th>
                                </tr>
                                <tr>
                                    <th scope='row'>10</th>
                                    <th>Pour Point</th>
                                    <th>6 - 18</th>
                                    <th>16</th>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            <b>
                                Remarks: Biodiesel reduces exhaust emissions compared to Petro Diesel. Biodiesel is renewable fuel and 100% Biodegradable, Fossil fuels and its Derivatives are not biodegradable. Petro Diesel existing engines can utilize the Biodiesel.
                            </b>
                        </p>
                    </div>
                    <br />
                    <div className="col-md-12">
                        <h3 className='defaultHeader'>BIODIESEL EMISSIONS</h3>
                        <p>
                            Biodiesel is the first and only alternative fuel to have a complete evaluation of emission results and potential health effects submitted to the U.S. Environmental Protection Agency (EPA) under the Clean Air Act Section 211(b). These programs include the most stringent emissions testing protocols ever required by EPA for certification of fuels or fuel additives. The data gathered complete the most thorough inventory of the environmental and human health effects attributes that current technology will allow. EPA has surveyed the large body of biodiesel emissions studies and averaged the Health Effects testing results with other major studies. The results are seen in the table below. To view EPA’s report titled "A Comprehensive Analysis of Biodiesel Impacts on Exhaust Emissions".
                        </p>
                        <br />
                        <p>

                        </p>
                        <br />
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Emission Type</th>
                                    <th>B100</th>
                                    <th>BB20</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>Regulated Total Unburned Hydrocarbons</th>
                                    <th>-67%</th>
                                    <th>-20%</th>
                                </tr>
                                <tr>
                                    <th scope='row'>Carbon Monoxide</th>
                                    <th>-48%</th>
                                    <th>-12%</th>
                                </tr>
                                <tr>
                                    <th scope='row'>Particulate Matter</th>
                                    <th>-47%</th>
                                    <th>-12%</th>
                                </tr>
                                 <tr>
                                    <th scope='row'>NOx</th>
                                    <th>+10%</th>
                                    <th>+2% to -2%</th>
                                </tr>
                                 <tr>
                                    <th scope='row'>Non-Regulated Sulfates</th>
                                    <th>-100%</th>
                                    <th>-20%*</th>
                                </tr>
                                 <tr>
                                    <th scope='row'>PAH (Polycyclic Aromatic Hydrocarbons)**</th>
                                    <th>-80%</th>
                                    <th>-13%</th>
                                </tr>
                                <tr>
                                    <th scope='row'>nPAH (nitrated PAH’s)**</th>
                                    <th>-90%</th>
                                    <th>-50%***</th>
                                </tr>
                                <tr>
                                    <th scope='row'>Ozone potential of speciated HC</th>
                                    <th>-50%</th>
                                    <th>-10%</th>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <p>
                            <b>* Estimated from B100 result</b>
                        </p>
                        <p>
                            <b>** Average reduction across all compounds measured</b>
                        </p>
                        <p>    
                            <b>*** 2-nitroflourine results were within test method variability</b>
                        </p>
                        <br />
                        <p>
                            The ozone (smog) forming potential of biodiesel hydrocarbons is less than Diesel fuel: The ozone forming potential of the speciated hydrocarbon Emissions are 50 percent less than that measured for diesel fuel.
                        </p>    
                        <br />
                        <p>
                            Sulphur emissions are essentially eliminated with pure biodiesel: The Exhaust emissions of sulphur oxides and sulphates (major components of acid rain) from biodiesel are essentially eliminated compared to diesel.   
                        </p>
                        <br />
                        <p>
                            Criteria pollutants are reduced with biodiesel use: Tests show the use of Biodiesel in diesel engines results in substantial reductions of unburned Hydrocarbons, carbon monoxide, and particulate matter. Emissions of Nitrogen oxides stay the same or are slightly increased.                        
                        </p>
                        <br />
                        <p>
                            Carbon Monoxide: The exhaust emissions of carbon monoxide (a Poisonous gas) from biodiesel are on average 48 percent lower than Carbon monoxide emissions from diesel. Particulate Matter - Breathing particulate has been shown to be a Human health hazard. The exhaust emissions of particulate matter From biodiesel are about 47 percent lower than overall particulate Matter emissions from diesel.
                        </p>
                        <br />
                        <p>
                            Hydrocarbons: The exhaust emissions of total hydrocarbons (a Contributing factor in the localized formation of smog and ozone) are on average 67 percent lower for biodiesel than diesel fuel.                        
                        </p>
                        <br />
                        <p>
                            Nitrogen Oxides: NOx emissions from biodiesel increase or decrease Depending on the engine family and testing procedures. NOx Emissions (a contributing factor in the localized formation of smog and Ozone) from pure (100%) biodiesel increase on average by 10 percent.However, biodiesel’s lack of sulphur allows the use of NOx control Technologies that cannot be used with conventional diesel. Additionally, some companies have successfully developed additives to reduce Nox emissions in biodiesel blends.
                        </p>
                        <br />
                        <p>
                            Biodiesel reduces the health risks associated with petroleum diesel:Biodiesel emissions show decreased levels of polycyclic aromatic hydrocarbons (PAH) and nitrated polycyclic aromatic hydrocarbons(nPAH), which have been identified as potential cancer causing compounds. In Health Effects testing, PAH compounds were reduced by 75 to 85 percent, with the exception of benzo(a)anthracene, which was reduced by roughly 50 percent. Targeted nPAH compounds were also reduced dramatically with biodiesel, with 2-nitrofluorene and 1-nitropyrene reduced by 90 percent, and the rest of the nPAH compounds reduced to only trace levels.                        
                        </p>                    
                    </div>
                    <br />
                    <div className="col-md-12">
                        <h3 className='defaultHeader'>Application of Biodiesel</h3>
                        <dl className="defaultDescList">
                            <dt>On-Road Vehicles</dt>
                            <dd>
                                All Vehicles having Diesel Engine can be powered by Biodiesel without any hassle. 
                            </dd>
                            <dt>Off-Road Vehicles</dt>
                            <dd>
                                Natural Biodiesel fuel can be used for construction, mining, and farm machinery.  
                            </dd>
                            <dt>Marine Vessels</dt>
                            <dd>
                                Natural Biodiesel can be used in marine engines safely. Marine use is especially attractive due to the elimination of any possibility for contamination of waterways.
                            </dd>
                            <dt>Stationary Power Generation</dt>
                            <dd>
                                With new power generation capacity coming online, Natural biodiesel makes an attractive choice to meet the regulations. Many stationary applications are permitted sources requiring exhaust emission control system, which will work well with biodiesel but will not work with diesel fuel.
                            </dd>
                            <dt>Boiler Fuel</dt>
                            <dd>
                                With natural gas prices rising high, biodiesel can be substituted easily for natural gas with minor changes necessary to the burner train.
                            </dd>
                            <dt>Hybrid Vehicles</dt>
                            <dd>
                                With many states now mandating hybrid electric vehicles (including the fuel cell hybrid), biodiesel will make excellent reforming fuel.
                            </dd>
                            <dt>Lubricity Agent/Additive</dt>
                            <dd>
                                Natural biodiesel can also be used as a lubricity agent/enhancer in many applications. It is especially useful in marine applications where water contamination with petroleum lubricity agents can create problems. With the low-sulfur fuel regulation of future, biodiesel can be used as a lubricity additive. A 1-2% biodiesel added to diesel fuel can increase diesel lubricity by 65%.
                            </dd>
                            <dt>Fuel Additive</dt>
                            <dd>
                                Biodiesel can also be used as a diesel fuel additive for the purpose of keeping the injectors, pumps and other combustion components clean. A 1-2% blend should be sufficient for this purpose.
                            </dd>    
                        </dl>
                    </div>
            	</div>
            </div>
        );
    }
}

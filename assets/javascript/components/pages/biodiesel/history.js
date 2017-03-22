import React from 'react';

export default class BioDieselHistory extends React.Component {
    render () {
        const biodieselImage = require('../../../../images/biodieselImage.jpg');
        const h2Style={
            borderBottom: "none"
        };
        return (
            <div className="col-md-9">
                <div className="row">
                	<div className="col-md-12">
                		<h2 className='defaultHeader' style={h2Style}>History Of BioDiesel</h2>
                		<img src={biodieselImage} className="img-responsive" alt="BiodDiesel Image"/>
                		<br />
                		<p>
                			Developed in the 1890s by inventor Rudolph Diesel, the diesel engine has become the engine of choice for power, reliability, and high fuel economy, worldwide. Early experimenters on vegetable oil fuels included the French government and Dr. Diesel himself, who envisioned that pure vegetable oils could power early diesel engines for agriculture in remote areas of the world, where petroleum was not available at the time. Modern biodiesel fuel, which is made by converting vegetable oils into compounds called fatty acid methyl esters, has its roots in research conducted in the 1930s in Belgium, but today’s biodiesel industry was not established in Europe until the late 1980s.
                		</p>
                		<br />
                		<p>
                			The diesel engine was developed out of a desire to improve upon inefficient, cumbersome and sometimes dangerous steam engines of the late 1800s. The diesel engine works on the principal of compression ignition, in which fuel is injected into the engine’s cylinder after air has been compressed to a high pressure and temperature. As the fuel enters the cylinder it self-ignites and burns rapidly, forcing the piston back down and converting the chemical energy in the fuel into mechanical energy. Dr. Rudolph Diesel, after whom the engine is named, holds the first patent for the compression ignition engine, issued in 1893. Diesel became known worldwide for his innovative engine which could use a variety of fuels.
                		</p>
                		<br />
                		<p>
                			The concept of bio fuel dates back to 1885 when Dr. Rudolf Diesel built the first diesel engine with the full intention of running it on vegetative source. In 1912 he observed, "the use of vegetable oils for engine fuels may seem insignificant today. But such oils may in the course of time become as important as petroleum and the coal tar products of present time".
                		</p>
                		<br />
                		<p>
                			In 1970, scientists discovered that the viscosity of vegetable oils could be reduced by a simple chemical process and that it could perform as diesel fuel in modern engine. Since then the technical developments have come a long way and the plant oil today has been highly established as bio fuel, equivalent to diesel.
                		</p>
                		<br />
                		<p>
                			Recent environmental (e.g. Kyoto Protocol) and economic concerns have prompted resurgence in the use of biodiesel throughout the world. In 1991, the European Community proposed a 90% tax reduction for the use of bio fuels, including biodiesel. Today 21 countries worldwide produce biodiesel.
                		</p>
                		<br />
                		<p>
                			India is one of the largest petroleum consuming and importing countries. India imports about 70 % of its petroleum demands. The current yearly consumption of diesel oil in India is approximately 40 million tones constituting about 40% of the total petro-product consumption.
                		</p>
                		<br />
                		<p>
                			Biodiesel, derived from the oils and fats of plants like sunflower, rape seeds, Canola or Jatropha (Bhagveranda) can be used as a substitute or an additive to diesel. As an alternative fuel biodiesel can provide power similar to conventional diesel fuel and thus can be used in diesel engines. Biodiesel is a renewable liquid fuel that can be produced locally thus helping reduce the country’s dependence on imported crude petroleum diesel.
                		</p>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className='defaultHeader'>Early Work</h2>
                		<p>
                			The early diesel engines had complex injection systems and were designed to run on many different fuels, from kerosene to coal dust. It was only a matter of time before someone recognized that, because of their high energy content, vegetable oils would make excellent fuel. The first public demonstration of vegetable oil based diesel fuel was at the 1900 World’s Fair, when the French government commissioned the Otto Company to build a diesel engine to run on peanut oil. The French government was interested in vegetable oils as a domestic fuel for their African colonies. Rudolph Diesel later did extensive work on vegetable oil fuels and became a leading proponent of such a concept, believing that farmers could benefit from providing their own fuel. However, it would take almost a century before such an idea became a widespread reality. Shortly after Dr. Diesel’s death in 1913 petroleum became widely available in a variety of forms, including the class of fuel we know today as “diesel fuel”. With petroleum being available and cheap, the diesel engine design was changed to match the properties of petroleum diesel fuel. The result was an engine which was fuel efficient and very powerful. For the next 80 years diesel engines would become the industry standard where power, economy and reliability are required.
                		</p>
                	</div>
                	<br />
                	<div className="col-md-12">
                		<h2 className='defaultHeader'>Modern Engine: Modern Fuel</h2>
                		<p>
                			Due to the widespread availability and low cost of petroleum diesel fuel, vegetable oil-based fuels gained little attention, except in times of high oil prices and shortages. World War II and the oil crises of the 1970’s saw brief interest in using vegetable oils to fuel diesel engines. Unfortunately, the newer diesel engine designs could not run on traditional vegetable oils, due to the much higher viscosity of vegetable oil compared to petroleum diesel fuel. A way was needed to lower the viscosity of vegetable oils to a point where they could be burned properly in the diesel engine. Many methods have been proposed to perform this task, including pyrolysis, blending with solvents, and even emulsifying the fuel with water or alcohols, none of which have provided a suitable solution. It was a Belgian inventor in 1937 who first proposed using Transesterfication to convert vegetable oils into fatty acid alkyl esters and use them as a diesel fuel replacement. The process of Transesterfication converts vegetable oil into three smaller molecules which are much less viscous and easy to burn in a diesel engine. The Transesterfication reaction is the basis for the production of modern biodiesel, which is the trade name for fatty acid methyl esters. In the early 1980s concerns over the environment, energy security, and agricultural overproduction once again brought the use of vegetable oils to the forefront, this time with Transesterfication as the preferred method of producing such fuel replacements.
                		</p>
                	</div>
                </div>
            </div>
        );
    }
}
